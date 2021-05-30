import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductListing from "./Components/ProductListing";
import Cart from "./Components/Cart";
// import Wishlist from "./Components/Wishlist";
import EmptyWishlist from "./Components/MainContents/EmptyWishlist";
import EmptyCart from "./Components/MainContents/EmptyCart";
import { useCart } from "./Contexts/cart-context";
import {totalItems} from './Utils/utils'


function App() {
  const { cartItems } = useCart();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-listing" element={<ProductListing />} />
      {totalItems(cartItems) === 0 ? (
        <Route path="/cart" element={<EmptyCart />} />
      ) : (
        <Route path="/cart" element={<Cart />} />
      )}
      <Route path="/wishlist" element={<EmptyWishlist />} />

      {/* <Route path="/wishlist" element={<Wishlist />} /> */}
    </Routes>
  );
}

export default App;
