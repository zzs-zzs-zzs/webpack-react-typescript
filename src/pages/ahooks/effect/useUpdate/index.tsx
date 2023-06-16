import React from "react"
import { useUpdate } from "ahooks"
import { Button } from "antd"

export const UseUpdate = () => {
  // update方法会强制重新刷新
  const update = useUpdate()

  return (
    <>
      <div>{new Date().toString()}</div>
      <div>
        <Button onClick={update}>重新渲染,update = useUpdate(),update方法会强制重新刷新</Button>
      </div>
    </>
  )
}
