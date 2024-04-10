import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

var httlib = require('http');
var token  = 'SECRET_TOKEN_F8ED34Eeeeeeee';
console.log('token:' + token);
