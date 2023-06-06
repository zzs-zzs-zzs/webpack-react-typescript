import React, { useState, useTransition } from "react"
import styled, { css } from "styled-components"

const tabStyle = css`
  color: red;
`

const Tab = styled.div`
  display: inline-block;
  margin-right: 5px;
  ${(props: { active: boolean }) => props.active && tabStyle}
`

type ITab = Record<string, string[]>

export const UseTransition: React.FC<{}> = () => {
  const mockList1 = new Array(10000).fill("tab1").map((item, index) => item + "--" + index)
  const mockList2 = new Array(10000).fill("tab2").map((item, index) => item + "--" + index)
  const mockList3 = new Array(10000).fill("tab3").map((item, index) => item + "--" + index)

  const tab: ITab = {
    tab1: mockList1,
    tab2: mockList2,
    tab3: mockList3,
  }

  const [active, setActive] = useState<string>("tab1") //需要立即响应的任务，立即更新任务
  const [renderData, setRenderData] = useState<string[]>(tab[active]) //不需要立即响应的任务，过渡任务
  const [isPending, startTransition] = useTransition()

  const handleChangeTab = (activeItem: string) => {
    setActive(activeItem) // 立即更新
    startTransition(() => {
      // startTransition 里面的任务优先级低
      setRenderData(tab[activeItem])
    })
  }

  return (
    <div>
      切换tab看效果，显示loading效果，再更新数据
      <div>
        {Object.keys(tab).map((item, index) => (
          <Tab active={active === item} key={index} onClick={() => handleChangeTab(item)}>
            {item}
          </Tab>
        ))}
      </div>
      <ul>
        {isPending && <div> loading... </div>}
        {renderData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
