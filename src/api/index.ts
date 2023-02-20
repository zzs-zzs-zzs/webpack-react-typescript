import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, Canceler } from "axios"
import { message as antMessage } from "antd"

export type AxiosResponseType = Promise<AxiosResponse<any, any>>

const pendingMap: Map<string, Canceler> = new Map()

interface ICustomOptions {
  /** 是否开启取消重复请求, 默认为 true */
  repeat_request_cancel: boolean
  /** 是否开启简洁的数据结构响应, 默认为true */
  reduct_data_format: boolean
  /** 是否开启接口错误信息展示,默认为true */
  error_message_show: boolean
}

/** 配置 */
const defaultOptions: ICustomOptions = {
  repeat_request_cancel: true,
  reduct_data_format: true,
  error_message_show: true,
}

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
  let message = ""
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = "接口重定向了！"
        break
      case 400:
        message = "参数不正确！"
        break
      case 401:
        message = "您未登录，或者登录已经超时，请先登录！"
        break
      case 403:
        message = "您没有权限操作！"
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break // 在正确域名下
      case 408:
        message = "请求超时！"
        break
      case 409:
        message = "系统已存在相同数据！"
        break
      case 500:
        message = "服务器内部错误！"
        break
      case 501:
        message = "服务未实现！"
        break
      case 502:
        message = "网关错误！"
        break
      case 503:
        message = "服务不可用！"
        break
      case 504:
        message = "服务暂时无法访问，请稍后再试！"
        break
      case 505:
        message = "HTTP版本不受支持！"
        break
      default:
        message = "异常问题，请联系管理员！"
        break
    }
  }
  if (error.message.includes("timeout")) {
    message = "网络请求超时！"
  }
  if (error.message.includes("Network")) {
    message = window.navigator.onLine ? "服务端异常！" : "您断网了！"
  }
  // 处理被取消的请求
  if (axios.isCancel(error)) {
    console.error("请求的重复请求：" + error.message, pendingMap)
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
