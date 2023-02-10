import React, { useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { IHomeData } from "./interface"
import { Button, Input } from "antd"

const Home = observer(({ store }: IHomeData) => {
  const [name, setName] = useState<string>("")

  useEffect(() => {
    setName(store?.userInfo.name!)
  }, [])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setName(value)
  }

  const handleSetName = (): void => {
    store?.setUserInfo(name)
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

export default inject(store => store)(Home)
