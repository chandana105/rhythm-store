import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Contexts/store-context";
import {CartProvider} from './Contexts/cart-context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
