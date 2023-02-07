import React from "react"
import "./App.css"
import "./App.less"
import Class from "./components/Class"
import smallImg from './assets/img/logo.svg'
import bigImg from './assets/img/test.png'

const App = () => {
  return (
    <div>
      <Class />
      <h2 className="red size">webpack5-react-ts</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于10kb的图片" />
    </div>
  )
}

export default App