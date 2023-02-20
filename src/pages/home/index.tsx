import React, { useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { IHomeData } from "./interface"
import { Button, Input } from "antd"
import { getTestDataObs } from "@/api/testApis"

const Home = observer(({ store }: IHomeData) => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    getData()
    setName(store?.userInfo.name!)
  }, [])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setName(value)
  }

  const handleSetName = (): void => {
    getData()
    store?.setUserInfo(name)
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
      <h2>name --- {store?.userInfo.name}</h2>
    </>
  )
})

export default inject((store) => store)(Home)
