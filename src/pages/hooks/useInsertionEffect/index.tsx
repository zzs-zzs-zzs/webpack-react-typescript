import React, { useInsertionEffect } from "react"

export const UseInsertionEffect: React.FC<{}> = () => {
  useInsertionEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      h1 {
        color: red;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <div>
      <h1>我是文本，测试一下useInsertionEffect,将文本改成红色</h1>
    </div>
  )
}
