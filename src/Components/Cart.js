import Checkout from "./MainContents/Checkout";
import CartItems from "./MainContents/CartItems";
import Navbar from "./Nav";


const Cart = () => {
  return (
    <>
    <div className="container" id="cart">
      <Navbar />
      <div className="content">
        <main>
          <CartItems />
          <Checkout />
        </main>
      </div>
    </div>
    </>
  );
};

export default Cart;

