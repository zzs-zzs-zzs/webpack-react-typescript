import React, { memo } from "react"
import { Button } from "antd"

interface IProps {
  count: number
  onChange: () => void
}

const Com: React.FC<IProps> = (props) => {
  console.log("%c [ MemoCom渲染 ]-10", "font-size:13px; background:pink; color:#bf2c9f;")
  return (
    <div>
      我是子组件，count={props.count}
      <Button onClick={props.onChange}>count+1</Button>
    </div>
  )
}

export const MemoCom = memo(Com)
