import React, { useId, useInsertionEffect, useState } from "react"
import { flushSync } from "react-dom"

export const BatchUpdate = () => {
  console.log("%c [ render ]-8", "font-size:13px; background:pink; color:#bf2c9f;")
  const id = useId()
  const id1 = useId()
  console.log("%c [ id ]-11", "font-size:13px; background:pink; color:#bf2c9f;", id, id1)
  const [count1, setCount1] = useState<number>(0)

  const [count2, setCount2] = useState<number>(0)

  useInsertionEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      h1 {
        color: red;
      }
    `
    document.head.appendChild(style)
  }, [])

  const handleClick = () => {
    flushSync(() => {
      setCount1(count1 + 1)
    })
    flushSync(() => {
      setCount2(count2 + 1)
    })
  }

  return (
    <div onClick={handleClick}>
      点击测试render次数，打开控制台
      <h1>{count1}</h1>
      <h1>{count2}</h1>
    </div>
  )
}
