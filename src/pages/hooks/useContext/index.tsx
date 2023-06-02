import { Button } from "antd"
import React, { useContext, createContext, useState } from "react"

interface IContextData {
  key1?: number
  key2?: number
}

const TestContext = createContext<IContextData>({})

const Com: React.FC<{}> = () => {
  const myContext = useContext(TestContext)
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        ----------------------------华丽分割线 --------------------------------------------
      </div>
      <div>我是子组件</div>
      <div>useContext(TestContext).key1 = {myContext.key1}</div>
      <div>useContext(TestContext).key2 = {myContext.key2}</div>
    </>
  )
}

export const UseContext: React.FC<{}> = () => {
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
      <div>我是父组件，通过createContext创建了一个context，通过context.provider将值传给子组件</div>
      <TestContext.Provider value={obj}>
        <Com />
      </TestContext.Provider>
    </>
  )
}
