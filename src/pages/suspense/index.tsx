import React, { lazy, LazyExoticComponent, Suspense } from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import styled from "styled-components"

const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin rev={undefined} />

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
`

const CommonCom: LazyExoticComponent<React.FC> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("@/components/commonCom"))
    }, 2000)
  })
})

export const SuspenseCom = () => {
  return (
    <>
      <div>下面用的是suspense，没有加载出来用loading</div>
      <Suspense
        fallback={
          <LoadingContainer>
            <Spin indicator={antIcon} />
          </LoadingContainer>
        }
      >
        <CommonCom />
      </Suspense>
    </>
  )
}
