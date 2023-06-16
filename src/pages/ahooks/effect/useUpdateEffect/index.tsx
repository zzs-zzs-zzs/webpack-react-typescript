import React, { useState } from "react"
import { useUpdateEffect } from "ahooks"
import { Button } from "antd"

export const UseUpdateEffect = () => {
  const [count, setCount] = useState(0)

  // 初始化时候不回执行这个effect
  useUpdateEffect(() => {
    console.log("%c [ count修改了 ]-30", "font-size:13px; background:pink; color:#bf2c9f;", count)
  }, [count])

  return (
    <>
      <div>
        <Button onClick={() => setCount(count + 1)}>count+1</Button>
      </div>
    </>
  )
}
