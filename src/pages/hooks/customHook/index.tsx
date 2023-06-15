import { Button } from "antd"
import React, { useState } from "react"

type IUseFetchData = [string, () => void]

export const CustomHook: React.FC = () => {
  const useFetch: () => IUseFetchData = () => {
    const [data, setData] = useState<string>("")

    const getData = () => {
      const p: Promise<string> = new Promise((resolve) => {
        setTimeout(() => {
          resolve(`这是异步数据${new Date().toString()}`)
        }, 1000)
      })
      p.then((dataStr) => {
        setData(dataStr)
      })
    }

    return [data, getData]
  }

  const [data, getData] = useFetch()

  const handleClick = () => {
    getData()
  }

  return (
    <>
      <Button onClick={handleClick}>点击获取数据</Button>
      <div>data = {data}</div>
    </>
  )
}
