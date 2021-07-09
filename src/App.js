import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductListing from "./Components/Product/ProductListing";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/WishList/Wishlist";
import EmptyWishlist from "./Components/WishList/EmptyWishlist";
import EmptyCart from "./Components/Cart/EmptyCart";
import ProductDetail from "./Components/Product/ProductDetail";
import { useCart } from "./Contexts/data-context";
import { totalItems } from "./Utils/utils";
import { ToastContainer } from "react-toastify";

function App() {
  const { cartItems, wishList } = useCart();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        {totalItems(cartItems) === 0 ? (
          <Route path="/cart" element={<EmptyCart />} />
        ) : (
          <Route path="/cart" element={<Cart />} />
        )}
        {wishList.length === 0 ? (
          <Route path="/wishlist" element={<EmptyWishlist />} />
        ) : (
          <Route path="/wishlist" element={<Wishlist />} />
        )}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
