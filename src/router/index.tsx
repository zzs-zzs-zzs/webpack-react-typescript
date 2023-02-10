import React from "react"
import { useRoutes } from "react-router-dom"
import Test from "@/pages/test"
import Class from "@/pages/class"
import Home from "@/pages/home"
import Second1 from "@/pages/second1"
import Second2 from "@/pages/second2"
import { IRouteInter } from "./interface"

export const rootRouter: IRouteInter[] = [
  {
    path: "/",
    element: <Home />,
    meta: {
      title: "home页面",
      icon: "home",
    },
    children: [],
  },
  {
    path: "/test",
    element: <Test />,
    meta: {
      title: "test页面",
      icon: "test",
    },
    children: [],
  },
  {
    path: "/class",
    element: <Class />,
    meta: {
      title: "class页面",
      icon: "class",
    },
    children: [],
  },
  {
    path: "",
    meta: {
      title: "二级目录",
      icon: "second",
    },
    children: [
      {
        path: "/second/second1",
        element: <Second1 />,
        meta: {
          title: "二级-页面1",
        },
      },
      {
        path: "/second/second2",
        element: <Second2 />,
        meta: {
          title: "二级-页面2",
        },
      },
    ],
  },
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router
