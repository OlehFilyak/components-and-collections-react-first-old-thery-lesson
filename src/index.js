import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
const elem1 = "Привіт";
const elem2 = ", світе!";

const jsxElement = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(jsxElement);
ReactDOM.render(jsxElement, document.querySelector("#root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
