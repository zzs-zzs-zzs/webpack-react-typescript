import React, { PureComponent } from "react"
import { inject, observer } from "mobx-react"
import { Input } from "antd"
import userStore from "@/store/userStore"

interface IProps {
  store: typeof userStore
}

interface IState {
  name: string
}

/** 装饰器为,组件添加age属性 */
function addAge(Target: Function) {
  console.log(
    "%c [ 执行了装饰器addAge ]-17",
    "font-size:13px; background:pink; color:#bf2c9f;",
    Target,
  )
}
// 使用装饰圈
@inject("store")
@observer
@addAge
class Class extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      name: "名字",
    }
  }

  changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <>
        <Input value={this.state.name} onChange={this.changeName} />
        <div>this.props.store.userInfo.name={this.props.store.userInfo.name}</div>
        <div>this.state.name={this.state.name}</div>
      </>
    )
  }
}

export default Class
