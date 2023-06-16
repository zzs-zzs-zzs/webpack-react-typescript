import React, { useState, useRef } from "react"
import { useEventListener } from "ahooks"
import { message, Button } from "antd"

export const UseEventListener = () => {
  const [val, setVal] = useState(0)

  const ref = useRef(null)

  // 监听元素点击
  useEventListener(
    "click",
    () => {
      setVal(val + 1)
      message.info(`触发button的点击事件，val=${val}`)
    },
    { target: ref },
  )

  useEventListener("mousedown", (event) => {
    message.info(`监听鼠标点击事件${JSON.stringify(event)}`)
  })

  useEventListener("keydown", (event) => {
    message.info(`监听键盘下压事件${JSON.stringify(event)}`)
  })

  return (
    <>
      <div>
        <Button ref={ref}>Button</Button>
      </div>
    </>
  )
}
