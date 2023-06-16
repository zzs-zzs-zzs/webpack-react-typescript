import React, { useState } from "react"
import { useDebounceEffect } from "ahooks"
import { Input, message } from "antd"

export const UseDebounceEffect = () => {
  const [val, setVal] = useState("")

  // 多次修改count，只会执行effect
  useDebounceEffect(
    () => {
      message.info(`val修改了,val=${val}`)
    },
    [val],
    { wait: 300 },
  )

  return (
    <>
      <div>
        <Input
          onChange={(e) => setVal(e.target.value)}
          placeholder="useDebounceEffect作用于onChang函数，300mss执行一次"
        />
      </div>
    </>
  )
}
