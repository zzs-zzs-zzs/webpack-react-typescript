import { Button } from "antd"
import React, { useState } from "react"
import ReactDOM from "react-dom"

const TipCom: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "#fff",
        boxShadow: "1px 1px 5px #aaa",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      我是通过ReactDOM.createPortal,在document.body展示一个div
    </div>
  )
}

export const TestPortal: React.FC = () => {
  const [showTip, setShowTip] = useState(false)

  const changeShowTip = () => {
    setShowTip(true)
    setTimeout(() => {
      setShowTip(false)
    }, 5 * 1000)
  }

  return (
    <>
      <Button onClick={changeShowTip}>
        点击我,通过ReactDOM.createPortal,在document.body展示一个div
      </Button>
      {showTip && ReactDOM.createPortal(<TipCom />, document.body)}
    </>
  )
}
