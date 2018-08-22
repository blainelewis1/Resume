import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as data from "./data";

ReactDOM.render(<App {...data} />, document.getElementById("root"));
registerServiceWorker();
