import * as React from "react";
import * as ReactDOM from "react-dom"

import { Store, Provider } from "./store"
import { useContext } from "react";

function Counter() {
  const {state, dispatch} = useContext(Store)

}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app")
  if(root) {
    ReactDOM.render(<h1>HelloWorld</h1>, root);
  }
})

