import React, { useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { IHomeData } from "./interface"
import { Button, Input } from "antd"
import { getTestDataObs } from "@/api/testApis"
import { autorun, reaction, when } from "mobx"

const Home = ({ store }: IHomeData) => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    getData()
    setName(store.userInfo.name)
    // autorun自动收集依赖，修改是执行
    const autorunDisposer = autorun(() => {
      console.log(
        "%c [ userInfo修改了 ]-17",
        "font-size:13px; background:pink; color:#bf2c9f;",
        store.userInfo.name,
      )
    })

    // when之后执行一次
    const whenDisposer = when(
      () => store.userInfo.name.length > 3,
      () => {
        console.log(
          "%c [ store.userInfo.name的长度大于3 ]-28",
          "font-size:13px; background:pink; color:#bf2c9f;",
          store.userInfo.name,
        )
      },
    )

    // 第一个参数是依赖，会执行多次，相当于watch
    const reactionDisposer = reaction(
      () => store.userInfo.name,
      () => {
        console.log(
          "%c [ store.userInfo.name修改了 ]-37",
          "font-size:13px; background:pink; color:#bf2c9f;",
          store.userInfo.name,
        )
      },
    )

    return () => {
      autorunDisposer()
      whenDisposer()
      reactionDisposer()
    }
  }, [])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setName(value)
  }

  const handleSetName = (): void => {
    getData()
    store.setUserInfo(name)
  }

  /** 请求后台数据 */
  const getData = async (): Promise<void> => {
    const data = await getTestDataObs({
      name: name,
    })
    console.log("%c [  ]-28", "font-size:13px; background:pink; color:#bf2c9f;", data)
  }

  return (
    <>
      <h2>home page</h2>
      <Input value={name} onChange={handleChangeName} />
      <Button onClick={handleSetName}>修改用户名</Button>
      <h2>name --- {store.userInfo.name}</h2>
      <h2>computed获取name --- {store.getUserName()}</h2>
    </>
  )
}

export default inject((store) => store)(observer(Home))
