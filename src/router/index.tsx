import React from "react"
import { useRoutes } from "react-router-dom"
import Test from "@/pages/test"
import Class from "@/pages/class"
import Home from "@/pages/home"
import Second1 from "@/pages/second1"
import Second2 from "@/pages/second2"
import { IRouteInter } from "./interface"
import NoFound from "@/pages/noFound"
import { BatchUpdate } from "@/pages/hooks/batchUpdate"
import { UseTransition } from "@/pages/hooks/useTransition"
import { UseDeferredValue } from "@/pages/hooks/useDeferredValue"
import { UseReducer } from "@/pages/hooks/useReducer"
import { UseRef } from "@/pages/hooks/useRef"
import { UseInsertionEffect } from "@/pages/hooks/useInsertionEffect"
import { UseMemo } from "@/pages/hooks/useMemo"
import { ReactMemo } from "@/pages/hooks/react.memoAnduseCallback/react.memoAnduseCallback"
import { SuspenseCom } from "@/pages/suspense"
import { TestErrorBoundary } from "@/pages/hooks/testErrorBoundary"
import { TestPortal } from "@/pages/hooks/testPortal"
import { UseContext } from "@/pages/hooks/useContext"
import { TestRoute } from "@/pages/hooks/testRoute"
import { CustomHook } from "@/pages/hooks/customHook"
import userStore from "@/store/userStore"
import { UseRequest } from "@/pages/ahooks/useRequest"
import { UseUpdateEffect } from "@/pages/ahooks/effect/useUpdateEffect"
import { UseDebounceEffect } from "@/pages/ahooks/effect/useDebounceEffect"
import { UseLockFn } from "@/pages/ahooks/effect/useLockFn"
import { UseUpdate } from "@/pages/ahooks/effect/useUpdate"
import { UseEventListener } from "@/pages/ahooks/dom/useEventListener"
import { UseClickAway } from "@/pages/ahooks/dom/useClickAway"

export const noFound = "/noFound"

export const noShowMenus = [noFound]

export const rootRouter: IRouteInter[] = [
  {
    path: "/",
    element: <Home store={userStore} />,
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
    path: noFound,
    element: <NoFound />,
    meta: {
      title: "NoFound",
      icon: "none",
    },
    children: [],
  },
  {
    path: "/class",
    element: <Class store={userStore} />,
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
  {
    path: "",
    meta: {
      title: "hook练习",
      icon: "hooks",
    },
    children: [
      {
        path: "/hooks/customHook",
        element: <CustomHook />,
        meta: {
          title: "customHook",
        },
        children: [],
      },
      {
        path: "/hooks/batchUpdate",
        element: <BatchUpdate />,
        meta: {
          title: "批量更新",
        },
        children: [],
      },
      {
        path: "/hooks/useTransition",
        element: <UseTransition />,
        meta: {
          title: "useTransition",
        },
        children: [],
      },
      {
        path: "/hooks/useDeferredValue",
        element: <UseDeferredValue />,
        meta: {
          title: "useDeferredValue",
        },
        children: [],
      },
      {
        path: "/hooks/useReducer",
        element: <UseReducer />,
        meta: {
          title: "useReducer",
        },
        children: [],
      },
      {
        path: "/hooks/useRef",
        element: <UseRef />,
        meta: {
          title: "useRef",
        },
        children: [],
      },
      {
        path: "/hooks/useInsertionEffect",
        element: <UseInsertionEffect />,
        meta: {
          title: "useInsertionEffect",
        },
        children: [],
      },
      {
        path: "/hooks/useMemo",
        element: <UseMemo />,
        meta: {
          title: "useMemo",
        },
        children: [],
      },
      {
        path: "/hooks/reactMemo",
        element: <ReactMemo />,
        meta: {
          title: "reactMemo",
        },
        children: [],
      },
      {
        path: "/hooks/suspense",
        element: <SuspenseCom />,
        meta: {
          title: "suspense",
        },
        children: [],
      },
      {
        path: "/hooks/testErrorBoundary",
        element: <TestErrorBoundary />,
        meta: {
          title: "testErrorBoundary",
        },
        children: [],
      },
      {
        path: "/hooks/testPortal",
        element: <TestPortal />,
        meta: {
          title: "testPortal",
        },
        children: [],
      },
      {
        path: "/hooks/useContext",
        element: <UseContext />,
        meta: {
          title: "useContext",
        },
        children: [],
      },
      {
        path: "/hooks/testRoute",
        element: <TestRoute />,
        meta: {
          title: "testRoute",
        },
        children: [],
      },
    ],
  },
  {
    path: "",
    meta: {
      title: "ahooks练习",
      icon: "ahooks",
    },
    children: [
      {
        path: "/ahooks/useRequest",
        element: <UseRequest />,
        meta: {
          title: "useRequest",
        },
      },
      {
        path: "/ahooks/effect/useUpdateEffect",
        element: <UseUpdateEffect />,
        meta: {
          title: "useUpdateEffect",
        },
      },
      {
        path: "/ahooks/effect/useDebounceEffect",
        element: <UseDebounceEffect />,
        meta: {
          title: "useDebounceEffect",
        },
      },
      {
        path: "/ahooks/effect/useLockFn",
        element: <UseLockFn />,
        meta: {
          title: "useLockFn",
        },
      },
      {
        path: "/ahooks/effect/useUpdate",
        element: <UseUpdate />,
        meta: {
          title: "useUpdate",
        },
      },
      {
        path: "/ahooks/dom/useEventListener",
        element: <UseEventListener />,
        meta: {
          title: "useEventListener",
        },
      },
      {
        path: "/ahooks/dom/useClickAway",
        element: <UseClickAway />,
        meta: {
          title: "useClickAway",
        },
      },
    ],
  },
]

const Router = () => {
  return useRoutes(rootRouter)
}

export default Router
