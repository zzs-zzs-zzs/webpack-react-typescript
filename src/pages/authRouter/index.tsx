import React from "react"
import { rootRouter, noFound } from "@/router"
import { Navigate, useLocation } from "react-router-dom"

interface IProps {
  children: React.ReactElement
}

export const AuthRouter: React.FC<IProps> = (props) => {
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

  const { pathname } = useLocation()
  const routerList = getAllRouterList()

  if (!routerList.includes(pathname)) {
    return <Navigate to={noFound} replace />
  } else {
    return props.children
  }
}
