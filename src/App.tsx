import React, { useEffect, useState } from "react"
import "./App.css"
import "./App.less"
import "./app-no-use.css"
import Class from "@/components/Class"
import smallImg from "@/assets/img/logo.svg"
import bigImg from "@/assets/img/test.png"
import { getDate } from "@/utils/date"
import { getPath } from "@/utils/path"
import { cloneDeep } from "lodash"
import "@/utils/date"
import styled from "styled-components"

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const App = () => {
  useEffect(() => {
    test()
  }, [])

  const [count, setCount] = useState<string>("10")
  const [date, setDate] = useState<string>()

  const test = () => {
    setCount("1")
    const day = getDate()
    setDate(day)
    getPath()
    const obj = { a: 1 }
    const obj1 = cloneDeep(obj)
    console.log("%c [ obj1 ]-28", "font-size:13px; background:pink; color:#bf2c9f;", obj1)
  }

  return (
    <div>
      <Class />
      <Button>button</Button>
      <h2 className="red size"> webpack5-react-ts</h2>
      <h2 className="red size">{date}</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片 " />
      <p>受控组件</p>
      <input
        type="text"
        value={count}
        onChange={e => {
          setCount(e.target.value)
        }}
      />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </div>
  )
}

export default App
