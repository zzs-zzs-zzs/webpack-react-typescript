// styled-components的公用样式和全局样式

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    color: rebeccapurple;
  }
  body {
    margin: 0;
  }
  /* 定义全局样式，包括滚动条样式 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`
