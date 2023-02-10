import styled from "styled-components"
import { Menu } from "antd"

export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`

export const IMenu = styled(Menu)`
  height: calc(100% - 64px);
  border-right: 0;
`
