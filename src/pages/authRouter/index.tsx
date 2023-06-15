import React, { useEffect } from "react"
import { rootRouter, noFound } from "@/router"
import { Navigate, useLocation } from "react-router-dom"

interface IProps {
  children: React.ReactElement
}

export const AuthRouter = (props: IProps) => {
  const location = useLocation()

  useEffect(() => {
    console.log(
      "%c [ 可以在这里执行路由守卫 ]-14",
      "font-size:13px; background:pink; color:#bf2c9f;",
    )
  }, [location])

  const getAllRouterList = (): string[] => {
    const routerArr: string[] = []
    rootRouter.forEach((item) => {
      if (item.children.length) {
        item.children.forEach((element) => {
          routerArr.push(element.path)
        })
      } else {
        routerArr.push(item.path!)
      }
    })
    return routerArr
  }

  const routerList = getAllRouterList()

  if (!routerList.includes(location.pathname)) {
    return <Navigate to={noFound} replace />
  } else {
    return props.children
  }
}
