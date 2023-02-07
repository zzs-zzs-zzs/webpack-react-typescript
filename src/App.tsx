import React, { useState } from "react"
import "./App.css"
import "./App.less"
import Class from "@/components/Class"
import smallImg from '@/assets/img/logo.svg'
import bigImg from '@/assets/img/test.png'

const App = () => {

  const [count, setCount] = useState<string>("10")

  return (
    <div>
      <Class />
      <h2 className="red size"> webpack5-react-ts</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片" />
      <p>受控组件</p>
      <input type="text" value={count} onChange={(e) => { setCount(e.target.value) }} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
    </div>
  )
}

export default App