import { Button } from "antd"
import React, { useState } from "react"
import {
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
  Route,
  Navigate,
  Routes,
} from "react-router-dom"

export const TestRoute = () => {
  console.log("%c [  ]-9", "font-size:13px; background:pink; color:#bf2c9f;", useParams())
  console.log("%c [  ]-7", "font-size:13px; background:pink; color:#bf2c9f;", useSearchParams())
  console.log("%c [  ]-8", "font-size:13px; background:pink; color:#bf2c9f;", useLocation())

  const { pathname, search } = useLocation()

  const [showRoutes, setShowRoutes] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const paramsData = new URLSearchParams(search)

  const navigate = useNavigate()

  /** 设置查询参数的值 */
  const handleSetParam = () => {
    setSearchParams({
      key: "value",
      a: "1",
    })
  }

  /** 跳转主页 */
  const handleGoToHome = () => {
    setShowRoutes(true)
  }

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
      <div>
        <p>paramsData.toString(): {paramsData.toString()}</p>
        <p>paramsData.get(key): {paramsData.get("key")}</p>
        <p>searchParams.get(key): {searchParams.get("key")}</p>
        <Button onClick={handleSetParam}>设置路由参数</Button>
        <Button onClick={handleGoToHome}>重定向到主页</Button>
        {showRoutes && (
          <Routes>
            <Route path="/" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </>
  )
}
