import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

const element = React.createElement("div", {
  a: 5,
  b: 10,
  children: ["Привіт,", " ", "світе!"],
});

const jsxElement = <div>Привіт, світе!</div>;

console.log(element);
console.log(jsxElement);
ReactDOM.render(element, document.querySelector("#root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
