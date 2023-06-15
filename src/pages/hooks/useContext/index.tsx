import { Button } from "antd"
import React, { useContext, createContext, useState } from "react"

interface IContextData {
  key1?: number
  key2?: number
}

const TestContext = createContext<IContextData>({})

const Com = () => {
  console.log("%c [ Com组件渲染了 ]-12", "font-size:13px; background:pink; color:#bf2c9f;")
  const myContext = useContext(TestContext)
  return (
    <>
      <div>我是子组件Com</div>
      <div>useContext(TestContext).key1 = {myContext.key1}</div>
    </>
  )
}

const Com1 = () => {
  console.log("%c [ Com1组件渲染了 ]-26", "font-size:13px; background:pink; color:#bf2c9f;")
  const myContext = useContext(TestContext)
  return (
    <>
      <div>我是子组件Com1</div>
      <div>useContext(TestContext).key2 = {myContext.key2}</div>
    </>
  )
}

export const UseContext = () => {
  const [obj, setObj] = useState<IContextData>({
    key1: 18,
    key2: 22,
  })

  const changeObj = () => {
    setObj({
      key1: Math.ceil(Math.random() * 100),
      key2: Math.ceil(Math.random() * 100),
    })
  }

  return (
    <>
      <Button onClick={changeObj}>修改传给子组件的值</Button>
      <div style={{ marginBottom: "50px" }}>
        我是父组件，通过createContext创建了一个context，通过context.provider将值传给子组件
      </div>
      <TestContext.Provider value={obj}>
        <Com />
        <div style={{ margin: "30px 0" }}>
          ----------------------------华丽分割线 --------------------------------------------
        </div>
        <Com1 />
      </TestContext.Provider>
    </>
  )
}
