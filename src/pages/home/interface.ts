import { IUserInfo, ISetUserInfo } from "@/store/userStore/interface"

export interface IHomeData {
  store?: {
    userInfo: IUserInfo
    setUserInfo: ISetUserInfo
  }
}
