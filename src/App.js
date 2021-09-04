import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductListing from "./Components/Product/ProductListing";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/WishList/Wishlist";
import EmptyWishlist from "./Components/WishList/EmptyWishlist";
import EmptyCart from "./Components/Cart/EmptyCart";
import ProductDetail from "./Components/Product/ProductDetail";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Profile from "./Auth/Profile";
import { useData } from "./Contexts/data-context";
import { totalItems } from "./Utils/utils";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";
import { useAuth } from "./Contexts/auth-context";
import { useEffect } from "react";
import { setupAuthHeaderForServiceCalls } from "./Utils/utils";

function App() {
  const { cartItems, wishList, getCartData, getWishData } = useData();
  const { token, getUserData } = useAuth();

  useEffect(() => {
    setupAuthHeaderForServiceCalls(token);
    if (token) {
      getCartData();
      getWishData();
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
