import React, { useEffect, useState } from "react"
import smallImg from '@/assets/img/logo.svg'
import bigImg from '@/assets/img/test.png'
import { cloneDeep } from "lodash"
import { getDate } from "@/utils/date"
import { getPath } from "@/utils/path"

const Test = () => {

  const [count, setCount] = useState<string>("10")

  const test = () => {
    setCount("1")
    const obj = { a: 1 }
    const obj1 = cloneDeep(obj)
    console.log("%c [  ]-25", "font-size:13px; background:pink; color:#bf2c9f;", obj === obj1)
    getDate()
    getPath()
  }

  return (
    <div>
      <h2 className="red size">Test -- {count}</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片 " />
    </div>
  )
}

export default Test