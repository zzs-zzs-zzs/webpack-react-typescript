import React, { useRef } from "react"
import { TestCom, IChildRef } from "@/components/testCom/testCom"

export const UseRef = () => {
  const dom = useRef<IChildRef>({} as IChildRef)

  const showDomRef = () => {
    console.log("%c [  ]-29", "font-size:13px; background:pink; color:#bf2c9f;", dom.current)
    const { getCount, processShow } = dom.current
    console.log("%c [  ]-35", "font-size:13px; background:pink; color:#bf2c9f;", getCount())
    processShow()
  }

  return (
    <div>
      <TestCom ref={dom} name="hhh" age={18}></TestCom>
      <button onClick={showDomRef}>展示子组件ref</button>
    </div>
  )
}
