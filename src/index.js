import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Contexts/auth-context";
import { StoreProvider } from "./Contexts/store-context";
import { CartProvider } from "./Contexts/data-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
