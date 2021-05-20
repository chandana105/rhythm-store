import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductListing from "./Components/ProductListing";
// import Cart from "./Components/Cart";
// import Wishlist from "./Components/Wishlist";
import EmptyWishlist from './Components/MainContents/EmptyWishlist'
import EmptyCart from './Components/MainContents/EmptyCart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/cart" element={<EmptyCart />} />
      <Route path="/wishlist" element={<EmptyWishlist />} />

      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/wishlist" element={<Wishlist />} /> */}

    </Routes>
  );
}

export default App;
