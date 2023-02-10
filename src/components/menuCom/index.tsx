import { Layout } from "antd"
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AppstoreOutlined,
} from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import { rootRouter } from "@/router"
import { IRouteInter, IRouterChildren } from "@/router/interface"
import { useNavigate } from "react-router-dom"
import { IMenuData, IMenuInter } from "./interface"
import { IMenu, Logo } from "./style"

const { Sider } = Layout

// icon 映射表
const iconObj: Record<string, JSX.Element> = {
  home: <UserOutlined />,
  test: <NotificationOutlined />,
  class: <LaptopOutlined />,
  second: <AppstoreOutlined />,
}

const MenuCom = (props: IMenuData) => {
  const [menuList, setMenuList] = useState<IMenuInter[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["/"])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const navigate = useNavigate()
  useEffect(() => {
    const data = createRouter(rootRouter)
    setMenuList(data)
    setMenuInitData()
  }, [])

  const getItem = (item: IMenuInter): IMenuInter => {
    const { label, key, icon, children = [] } = item
    return { label, key, icon, children: children }
  }

  /** 生成菜单数据 */
  const createRouter = (commentRoutes: IRouteInter[] | IRouterChildren[]): any[] => {
    const newItems: any = []
    commentRoutes.forEach(route => {
      if (route.children?.length) {
        // 多级目录
        newItems.push(
          getItem({
            label: route.meta?.title,
            key: route.path || route.meta.icon || "",
            icon: route.meta.icon && iconObj[route.meta.icon],
            children: createRouter(route.children),
          }),
        )
      } else {
        // 一级目录
        newItems.push({
          label: route.meta?.title,
          key: route.path,
          icon: route.meta.icon && iconObj[route.meta?.icon],
        })
      }
    })
    return newItems
  }

  const handleOnClick = (e: { key: string }): void => {
    // 路由跳转
    navigate(e.key)
    setSelectedKeys([e.key])
  }

  /** 设置菜单默认选中值 */
  const setMenuInitData = (): void => {
    const pathName = location.pathname
    if (!pathName) {
      setSelectedKeys(["/"])
      return
    }
    const pathArr = pathName.split("/")
    setSelectedKeys([pathName])
    setOpenKeys([pathArr[1]])
  }

  return (
    <Sider width={200} trigger={null} collapsible collapsed={props.collapsed}>
      <Logo />
      <IMenu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        items={menuList}
        onOpenChange={(keys: string[]) => setOpenKeys(keys)}
        onClick={handleOnClick}
      />
    </Sider>
  )
}

export default MenuCom
