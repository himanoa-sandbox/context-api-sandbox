import * as React from "react";
import * as ReactDOM from "react-dom"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app")
  if(root) {
    ReactDOM.render(<h1>HelloWorld</h1>, root);
  }
})
