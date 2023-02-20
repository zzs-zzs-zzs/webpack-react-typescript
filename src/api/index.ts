import axios, { AxiosRequestConfig, AxiosError } from "axios"
import { message as antMessage } from "antd"
import {
  AxiosResponseType,
  defaultErrorMsg,
  defaultOptions,
  ICustomOptions,
  errorMsgMap,
  pendingMap,
  timeoutErrorMsg,
  networkErrorMsg,
  cancelErrorMsg,
} from "./interface"

const myAxios = (
  defaultConfig: AxiosRequestConfig,
  customOptions?: ICustomOptions,
): AxiosResponseType => {
  const service = axios.create({
    baseURL: process.env.BASE_URL, // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  })

  // 自定义配置
  const custom_options = Object.assign(defaultOptions, customOptions)

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      removePending(config)
      custom_options.repeat_request_cancel && addPending(config)
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      removePending(response.config)
      if (response.data && response.data.code !== 200) {
        antMessage.error(response.data.message)
        // code不等于200, 也是reject
        return Promise.reject(response.data)
      }

      return custom_options.reduct_data_format ? response.data : response
    },
    (error) => {
      error.config && removePending(error.config)
      custom_options.error_message_show && httpErrorStatusHandle(error) // 处理错误状态码
      return Promise.reject(error) // 错误继续返回给到具体页面
    },
  )

  // 请求配置
  const axiosConfig = processAxiosConfig(defaultConfig)
  return service(axiosConfig)
}

/**
 * 处理异常
 * @param {*} error
 */
const httpErrorStatusHandle = (error: AxiosError): void => {
  let message = defaultErrorMsg
  if (error && error.response) {
    message = errorMsgMap[error.response.status]
  }
  if (error.message.includes("timeout")) {
    message = timeoutErrorMsg
  }
  if (error.message.includes("Network")) {
    message = networkErrorMsg
  }
  // 处理被取消的请求
  if (axios.isCancel(error)) {
    console.error(cancelErrorMsg + error.message, pendingMap)
    return
  }
  antMessage.error(message)
}

/**
 * 储存每个请求的唯一cancel回调, 以此为标识
 * @param {*} config
 */
const addPending = (config: AxiosRequestConfig): void => {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/**
 * 删除重复的请求
 * @param {*} config
 */
const removePending = (config: AxiosRequestConfig): void => {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken?.(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/**
 * 生成唯一的每个请求的唯一key
 * @param {*} config
 * @returns
 */
const getPendingKey = (config: AxiosRequestConfig): string => {
  const { url, method, params } = config
  let { data } = config
  if (typeof data === "string") data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join("&")
}

/**
 * 获取公用请求配置，如token等
 */
const processAxiosConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.headers) {
    config.headers = {}
  }
  // 自动携带token
  const token = localStorage.getItem("token")
  if (token && typeof window !== "undefined") {
    config.headers.Authorization = token
  }
  return config
}

export default myAxios
