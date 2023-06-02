import { Layout } from "antd"
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AppstoreOutlined,
  CarryOutOutlined,
} from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import { noShowMenus, rootRouter } from "@/router"
import { IRouteInter, IRouterChildren } from "@/router/interface"
import { useLocation, useNavigate } from "react-router-dom"
import { IMenuData, IMenuInter } from "./interface"
import { IMenu, Logo } from "./style"

const { Sider } = Layout

let menuMap: Record<string, string> = {}

// icon 映射表
const iconObj: Record<string, JSX.Element> = {
  home: <UserOutlined />,
  test: <NotificationOutlined />,
  class: <LaptopOutlined />,
  second: <AppstoreOutlined />,
  hooks: <CarryOutOutlined />,
}

const MenuCom = (props: IMenuData) => {
  const [menuList, setMenuList] = useState<IMenuInter[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["/"])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const location = useLocation()

  useEffect(() => {
    setMenuInitData()
  }, [location])

  const navigate = useNavigate()
  useEffect(() => {
    menuMap = {}
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
    commentRoutes.forEach((route) => {
      const pathKey = route.path || route.meta.icon
      if (noShowMenus.includes(route.path!) || !pathKey) {
        return
      }
      menuMap[pathKey] = route.meta?.title
      if (route.children?.length) {
        // 多级目录
        newItems.push(
          getItem({
            label: route.meta?.title,
            key: pathKey,
            icon: route.meta.icon && iconObj[route.meta.icon],
            children: createRouter(route.children),
          }),
        )
      } else {
        // 一级目录
        newItems.push({
          label: route.meta?.title,
          key: pathKey,
          icon: route.meta.icon && iconObj[route.meta?.icon],
        })
      }
    })
    return newItems
  }

  const handleOnClick = (e: { key: string; keyPath: string[] }): void => {
    const breadcrumbData: string[] = []
    e.keyPath.forEach((item) => {
      breadcrumbData.push(menuMap[item])
    })
    props.onMenuChange(breadcrumbData.reverse())
    // 路由跳转
    navigate(e.key)
    setSelectedKeys([e.key])
  }

  /** 设置菜单默认选中值 */
  const setMenuInitData = (): void => {
    const { pathname } = location
    if (!pathname) {
      setSelectedKeys(["/"])
      props.onMenuChange([menuMap["/home"]])
      return
    }
    setSelectedKeys([pathname])
    const pathArr = pathname.split("/")
    const breadcrumbData = []
    if (pathArr.length === 2) {
      breadcrumbData.push(menuMap[pathname])
    } else if (pathArr.length === 3) {
      setOpenKeys([pathArr[1]])
      breadcrumbData.push(...[menuMap[pathArr[1]], menuMap[pathname]])
    } else {
      // do nothing
    }
    props.onMenuChange(breadcrumbData)
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
