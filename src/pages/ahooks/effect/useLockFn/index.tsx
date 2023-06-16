import React, { useState } from "react"
import { useLockFn } from "ahooks"
import Button from "antd/es/button"
import { message } from "antd"

export const UseLockFn = () => {
  const [val, setVal] = useState(0)

  const getData = (): Promise<number> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val + 1)
      }, 2 * 1000)
    })
  }

  // useLockFn多次执行submit只会执行一次
  const submit = useLockFn(async () => {
    try {
      message.info("submit执行了")
      const data = await getData()
      setVal(data)
      message.success(`submit完毕，val=${data}`)
    } catch (err) {
      console.log("%c [ err ]-21", "font-size:13px; background:pink; color:#bf2c9f;", err)
    }
  })

  return (
    <>
      <div>
        <Button onClick={submit}>submit</Button>
      </div>
    </>
  )
}
