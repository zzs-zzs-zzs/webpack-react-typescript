import { IRouterChildren } from "@/router/interface"

export interface IMenuData {
  collapsed: boolean
  onMenuChange: (data: string[]) => void
}

export interface IMenuInter {
  icon: React.ReactNode
  label: string
  key: string
  children?: IRouterChildren[]
}
