import React, { PureComponent } from "react"
import { inject, observer } from "mobx-react"
import { IUserInfo } from "@/store/userStore/interface"

interface IProps {
  store?: {
    userInfo: IUserInfo
  }
}

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111
}
// 使用装饰圈
@inject("store")
@observer
@addAge
class Class extends PureComponent {
  declare props: IProps
  age?: number

  render() {
    console.log(
      "%c [  ]-16",
      "font-size:13px; background:pink; color:#bf2c9f;",
      this.props.store?.userInfo.name,
    )
    return <h2>我是类组件---{this.age}</h2>
  }
}

export default Class
