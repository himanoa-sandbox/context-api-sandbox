import * as React  from "react"
import { useContext } from "react";
import * as ReactDOM from "react-dom"
import { StoreContext, DispatchContext, Provider, actionCreators } from "./store"

function Counter() {
  const state = useContext(StoreContext)
  const dispatch = useContext(DispatchContext)
  return (
    <>
      <p> count: { state.count }</p>
      <button onClick={() => dispatch(actionCreators.increment())}>+</button>
      <button onClick={() => dispatch(actionCreators.decrement())}>-</button>
    </>
  )
}

function App() {
  return (
    <Provider><Counter /></Provider>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app")
  if(root) {
    ReactDOM.render(<App />, root);
  }
})

