import React, { useEffect, useState } from "react"
import { rootRouter, noFound } from "@/router"
import { Navigate, useLocation } from "react-router-dom"

export const AuthRouter = (props: any) => {
  const [routerList, setRouterList] = useState<string[]>([])
  useEffect(() => {
    getAllRouterList()
  }, [])

  const getAllRouterList = (): void => {
    const routerArr: string[] = []
    rootRouter.forEach(item => {
      if (item.children.length) {
        item.children.forEach(element => {
          routerArr.push(element.path)
        })
      } else {
        routerArr.push(item.path!)
      }
    })
    setRouterList(routerArr)
  }

  const { pathname } = useLocation()
  if (!routerList.includes(pathname)) {
    return <Navigate to={noFound} replace />
  } else {
    return props.children
  }
}
