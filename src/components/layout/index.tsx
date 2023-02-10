import MenuCom from "@/components/menuCom"
import React, { useState, useEffect } from "react"
import { Breadcrumb, theme, Spin } from "antd"
import { MenuFoldOutlined, MenuUnfoldOutlined, LoadingOutlined } from "@ant-design/icons"
import "./index.less"
import {
  LoadingContainer,
  LayoutContainer,
  MainContainer,
  ContentContainer,
  Content,
  IHeader,
} from "./style"
import { ILayout } from "./interface"

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />

const LayoutCom = (props: ILayout) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [breadcrumbData, setBreadcrumbData] = useState<string[]>([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const onMenuChange = (data: string[]): void => {
    setBreadcrumbData(data)
  }

  return (
    <>
      {loading && (
        <LoadingContainer>
          <Spin indicator={antIcon} />
        </LoadingContainer>
      )}
      {!loading && (
        <LayoutContainer>
          <MenuCom collapsed={collapsed} onMenuChange={onMenuChange} />
          <MainContainer>
            <IHeader style={{ padding: 0, background: colorBgContainer }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "menu-trigger",
                onClick: () => setCollapsed(!collapsed),
              })}
            </IHeader>
            <ContentContainer>
              <Breadcrumb style={{ margin: "16px 0" }}>
                {breadcrumbData.map((i, index) => (
                  <Breadcrumb.Item key={index}>{i}</Breadcrumb.Item>
                ))}
              </Breadcrumb>
              <Content>{props.children}</Content>
            </ContentContainer>
          </MainContainer>
        </LayoutContainer>
      )}
    </>
  )
}

export default LayoutCom
