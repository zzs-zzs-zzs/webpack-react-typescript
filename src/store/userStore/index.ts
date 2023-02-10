import { observable, action, makeAutoObservable } from "mobx"

class UserStore {
  constructor() {
    // 更新视图
    makeAutoObservable(this)
  }

  @observable userInfo = {
    name: "zzs",
  }

  @action setUserInfo = (name: string): void => {
    this.userInfo.name = name
  }
}

export default new UserStore()
