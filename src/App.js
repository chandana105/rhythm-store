import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductListing from "./Components/Product/ProductListing";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/WishList/Wishlist";
import EmptyWishlist from "./Components/WishList/EmptyWishlist";
import EmptyCart from "./Components/Cart/EmptyCart";
import ProductDetail from "./Components/Product/ProductDetail";
import Login from "./PrivateRoutes/Login & SignUp/Login";
import { useCart } from "./Contexts/data-context";
import { totalItems } from "./Utils/utils";
import { ToastContainer } from "react-toastify";
import SignUp from "./PrivateRoutes/Login & SignUp/SignUp";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";

function App() {
  const { cartItems, wishList } = useCart();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {totalItems(cartItems) === 0 ? (
          <PrivateRoute path="/cart" element={<EmptyCart />} />
        ) : (
          <PrivateRoute path="/cart" element={<Cart />} />
        )}
        {wishList.length === 0 ? (
          <PrivateRoute path="/wishlist" element={<EmptyWishlist />} />
        ) : (
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
        )}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;


