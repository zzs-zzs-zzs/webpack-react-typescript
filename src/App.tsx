import React from "react"
import "@/utils/date"
import LayoutCom from "@/components/layout"
import Router from "@/router"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <LayoutCom>
          <Router></Router>
        </LayoutCom>
      </BrowserRouter>
    </div>
  )
}

export default App
