import React from "react"
import "@/utils/date"
import LayoutCom from "@/components/layout"
import Router from "@/router"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import useStore from "@/store/userStore"
import { AuthRouter } from "./pages/authRouter"

const App = () => {
  return (
    <div>
      <Provider store={useStore}>
        <BrowserRouter>
          <AuthRouter>
            <LayoutCom>
              <Router></Router>
            </LayoutCom>
          </AuthRouter>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
