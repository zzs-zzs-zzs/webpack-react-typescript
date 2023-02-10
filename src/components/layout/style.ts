import styled from "styled-components"
import { Layout } from "antd"
import "./index.less"

const { Header } = Layout

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const LayoutContainer = styled(Layout)`
  height: 100vh;
  display: flex;
`

export const MainContainer = styled(Layout)`
  flex: 1;
  display: flex;
`

export const ContentContainer = styled(Layout)`
  padding: 0 24px 24px;
  flex: 1;
`

export const Content = styled.div`
  background: white;
  flex: 1;
  padding: 12px;
`
export const IHeader = styled(Header)`
  height: 48px !important;
`
