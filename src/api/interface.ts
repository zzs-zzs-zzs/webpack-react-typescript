import { AxiosResponse, Canceler } from "axios"

export type AxiosResponseType = Promise<AxiosResponse<any, any>>

export const pendingMap: Map<string, Canceler> = new Map()

export const errorMsgMap: Record<number, string> = {
  302: "接口重定向了！",
  400: "参数不正确！",
  401: "您未登录，或者登录已经超时，请先登录！",
  403: "您没有权限操作！",
  404: `请求地址出错`, // 在正确域名下
  408: "请求超时！",
  409: "系统已存在相同数据！",
  500: "服务器内部错误！",
  501: "服务未实现！",
  502: "网关错误！",
  503: "服务不可用！",
  504: "服务暂时无法访问，请稍后再试！",
  505: "HTTP版本不受支持！",
}

export const defaultErrorMsg = "异常问题，请联系管理员！"

export const timeoutErrorMsg = "网络请求超时！！"

export const networkErrorMsg = "服务端异常！"

export const cancelErrorMsg = "请求的重复请求："

export interface ICustomOptions {
  /** 是否开启取消重复请求, 默认为 true */
  repeat_request_cancel: boolean
  /** 是否开启简洁的数据结构响应, 默认为true */
  reduct_data_format: boolean
  /** 是否开启接口错误信息展示,默认为true */
  error_message_show: boolean
}

/** 配置 */
export const defaultOptions: ICustomOptions = {
  repeat_request_cancel: true,
  reduct_data_format: true,
  error_message_show: true,
}
