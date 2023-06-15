import React, { useState, useEffect } from "react"
import { Button } from "antd"

export const ErrorBoundary: React.FC<React.PropsWithChildren> = (props) => {
  const [hsaError, setHasError] = useState(false)

  useEffect(() => {
    const processError = () => {
      setHasError(true)
    }

    window.addEventListener("error", processError)
    return () => {
      window.removeEventListener("error", processError)
    }
  }, [])

  return (
    <>
      {hsaError ? (
        <div>
          <h1>我是ErrorBoundary组件，出错啦，所以展示我</h1>
          <div>
            <Button onClick={() => setHasError(false)}>点击我，展示回刚才组件</Button>
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  )
}
