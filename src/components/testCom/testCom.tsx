import React, { ForwardRefRenderFunction, useState, useImperativeHandle, forwardRef } from "react"

interface IProps {
  name: string
  age: number
  ref: React.ForwardedRef<unknown>
  children?: React.ReactElement
}

export interface IChildRef {
  getCount: () => number
  processShow: () => void
}

const Com: ForwardRefRenderFunction<IChildRef, IProps> = (props, ref) => {
  const [count, setCount] = useState<number>(0)

  useImperativeHandle(ref, () => ({
    getCount() {
      return count
    },
    processShow() {
      show()
    },
  }))

  const show = () => {
    setCount(count + 1)
    console.log("%c [  ]-14", "font-size:13px; background:pink; color:#bf2c9f;", count)
  }
  return <div onClick={show}>我是子组件 - {count}</div>
}

export const TestCom = forwardRef(Com)
