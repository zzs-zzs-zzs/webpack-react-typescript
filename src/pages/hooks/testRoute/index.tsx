import { Button } from "antd"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const TestRoute: React.FC<{}> = () => {
  const location = useLocation()
  const { pathname, search } = location

  const navigate = useNavigate()

  const navigateToHomePage = () => {
    navigate("/")
  }

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div>TestRoute组件</div>
      <div>pathname={pathname}</div>
      <div>search={search}</div>
      <Button onClick={navigateToHomePage}>跳转home</Button>
      <Button onClick={navigateBack}>后退一页</Button>
    </>
  )
}
