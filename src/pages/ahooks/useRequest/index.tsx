import React, { useState } from "react"
import { useRequest } from "ahooks"
import { LoadingOutlined } from "@ant-design/icons"
import { Button, Spin } from "antd"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const getData = (): Promise<IData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "useRequest",
        time: new Date().toString(),
      })
    }, 2 * 1000)
  })
}

interface IData {
  name: string
  time: string
}

export const UseRequest = () => {
  const [id, setId] = useState(0)

  const { loading, data, run, cancel } = useRequest(getData, {
    // 如果300ms之内能有结果就不loading
    loadingDelay: 300,
    // 轮询间隔
    pollingInterval: 5 * 1000,
    // 页面隐藏时不轮询
    pollingWhenHidden: false,
    // 依赖，当依赖改变时候，执行请求
    refreshDeps: [id],
    // 防抖
    debounceMaxWait: 300,
  })

  return (
    <>
      <div>
        <Button onClick={() => run()}>运行</Button>
        <Button onClick={() => cancel()}>abort执行</Button>
        <Button onClick={() => setId(Math.random())}>修改id。触发useRequest重新执行</Button>
      </div>
      {loading ? (
        <div>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          <div>name: {data?.name}</div>
          <div>time: {data?.time}</div>
        </>
      )}
    </>
  )
}
