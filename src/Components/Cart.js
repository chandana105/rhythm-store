import Checkout from "./MainContents/Checkout";
import CartItems from "./MainContents/CartItems";
import Navbar from "./Nav";

const Cart = () => {
  return (
    <div className="container" id="cart">
      <Navbar />
      <div className="content">
        <main>
          <CartItems />

          <Checkout />
        </main>
      </div>
    </div>
  );
};

export default Cart;

// contet auto row uske andar main ko krna center mein uske andar do divs flex row
