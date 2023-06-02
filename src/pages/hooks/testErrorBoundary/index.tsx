import { ErrorBoundary } from "@/components/errorBoundary"
import { Button } from "antd"
import React from "react"

export const TestErrorBoundary: React.FC<{}> = () => {
  const throwError = () => {
    throw new Error("抛出错误啦")
  }

  return (
    <>
      <ErrorBoundary>
        <>
          <h1>我是正常的组件内容</h1>
          <Button onClick={throwError}>点击我抛出错误</Button>
        </>
      </ErrorBoundary>
    </>
  )
}
