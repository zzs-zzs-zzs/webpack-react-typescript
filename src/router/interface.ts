export interface IRouterChildren {
  path: string
  element: JSX.Element
  meta: {
    title: string
    icon?: string
  }
  children?: []
}

export interface IRouteInter {
  path?: string
  element?: JSX.Element
  meta: {
    title: string
    icon: string
  }
  children: IRouterChildren[]
}
