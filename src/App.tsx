import React from "react"
import "@/utils/date"
import LayoutCom from "@/components/layout"
import Router from "@/router"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import userStore from "@/store/userStore"
import { AuthRouter } from "./pages/authRouter"

const App = () => {
  return (
    <div>
      <Provider store={userStore}>
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
