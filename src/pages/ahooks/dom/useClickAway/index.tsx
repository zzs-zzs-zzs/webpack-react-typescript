import React, { useState, useRef } from "react"
import { useClickAway } from "ahooks"
import { Button, message } from "antd"

export const UseClickAway = () => {
  const [count, setCount] = useState(0)

  const btnRef1 = useRef(null)
  const btnRef2 = useRef(null)

  // 点击指指定位置之外，触发函数
  useClickAway(() => {
    setCount(count + 1)
    message.info(`点击两个按钮之外，count+1，count=${count}`)
  }, [btnRef1, btnRef2])

  return (
    <>
      <div>
        <Button ref={btnRef1}>Button1</Button>
        <Button ref={btnRef2}>Button2</Button>
      </div>
    </>
  )
}
