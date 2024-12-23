import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading  = React.createElement("h1",{id:'heading'},"Namaste React🚀");

// JSX
const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);