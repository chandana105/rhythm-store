import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import ProductListing from "./Components/ProductListing";
import Cart from './Components/Cart'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route  path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
