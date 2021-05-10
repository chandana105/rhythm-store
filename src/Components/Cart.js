import card from '../images/card.webp'
import Navbar from "./Nav";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div id="cart">
        <div className="content">
          <main>
            <div className="cartItems">
              <div className="card2 card-horizontal">
                <div className="thumbnail">
                  <img src={card} alt="horizontal-img" />
                </div>
                <div className="text">
                  <span className="card-title">Card Title</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur, fuga vero aliquam ducimus error obcaecati unde
                    ipsum voluptas temporibus nihil molestias voluptates.
                    Aliquam maiores repellat sed quas amet itaque tempore
                    impedit placeat! Explicabo id iste, velit nobis veniam ab.
                    Deleniti nihil et id alias. Quidem, nostrum? Laborum dolore
                    rem quo.
                  </p>
                </div>
                <button className="close">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="checkout">Bye</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Cart;

// contet auto row uske andar main ko krna center mein uske andar do divs flex row
