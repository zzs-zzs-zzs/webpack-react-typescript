import React, { useReducer } from "react"

type IState = Record<string, any>

interface IAction {
  name: string
  payload: Object
}

export const UseReducer = () => {
  const [obj, dispatchObj] = useReducer(
    (state: IState, action: IAction) => {
      const { name, payload } = action
      switch (name) {
        case "addAttr":
          return {
            ...state,
            ...payload,
          }
        default:
          return state
      }
    },
    { name: "名字" },
  )

  return (
    <div>
      <button onClick={() => dispatchObj({ name: "addAttr", payload: { age: 18 } })}>
        点击新增数据
      </button>
      {Object.keys(obj).map((key, index) => {
        return (
          <div key={index}>
            {key} - {obj[key]}
          </div>
        )
      })}
    </div>
  )
}
