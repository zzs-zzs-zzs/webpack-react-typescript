import React, { useEffect, useState, useCallback } from "react"
import { Button } from "antd"
import { MemoCom } from "@/components/memoCom"

// memo只会进行浅比较，所以如果传了一个function下去，就裂开了，子组件每次都渲染
//------------------------------------------------------
// 通过useCallback或者useMemo可以解决

export const ReactMemo: React.FC<{}> = () => {
  const [curTime, setCurTime] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime(new Date().toLocaleString())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const onChange = useCallback(() => {
    setCount((newValue) => newValue + 1)
  }, [])

  // const onChange1 = useMemo(() => {
  //   console.log("%c [  ]-23", "font-size:13px; background:pink; color:#bf2c9f;", setCount, count)
  //   return () => setCount((newValue) => newValue + 1)
  // }, [])

  return (
    <>
      <div>{curTime}</div>
      <Button onClick={onChange}>添加，目前count={count}</Button>
      <MemoCom count={count} onChange={onChange} />
    </>
  )
}
