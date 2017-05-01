import React from "react"
import { render } from "react-dom"
import App from "./src/components/app"
import store from "./src/store"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
let app = document.getElementById("app");

render (
  <Provider store={store}>
    <App />
  </Provider>, app
);







