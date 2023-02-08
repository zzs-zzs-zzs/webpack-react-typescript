import React, { useEffect, useState } from "react"
import "./App.css"
import "./App.less"
import "./app-no-use.css"
import Class from "@/components/Class"
import smallImg from '@/assets/img/logo.svg'
import bigImg from '@/assets/img/test.png'
import { getDate } from "@/utils/date"
import { getPath } from "@/utils/path"
import { cloneDeep } from "lodash"
import "@/utils/date"

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
  }

  return (
    <div>
      <Class />
      <h2 className="red size"> webpack5-react-ts</h2>
      <h2 className="red size">{date}</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片 " />
      <p>受控组件</p>
      <input type="text" value={count} onChange={(e) => { setCount(e.target.value) }} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </div>
  )
}

export default App