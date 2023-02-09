import React, { Fragment } from "react"
import { createRoot } from "react-dom/client"
import App from "@/App"
import { GlobalStyle } from "./common-style"

console.log("NODE_ENV", process.env.NODE_ENV)
console.log("BASE_ENV", process.env.BASE_ENV)

const root = document.getElementById("root")
if (root) {
  createRoot(root).render(
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>,
  )
}
