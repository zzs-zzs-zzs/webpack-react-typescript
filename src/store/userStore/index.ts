import { observable, action, makeAutoObservable, computed } from "mobx"

class UserStore {
  constructor() {
    // 更新视图
    makeAutoObservable(this)
  }

  @observable userInfo = {
    name: "zzs",
  }

  @computed getUserName() {
    return this.userInfo.name
  }

  @action setUserInfo = (name: string): void => {
    this.userInfo.name = name
  }
}

export default new UserStore()
