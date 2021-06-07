import { NavLink, Link } from "react-router-dom";
import music from "../images/music.svg";
import avatar from "../images/avatar.jpg";
// import person from '../images/person.png'
import { useCart } from "../Contexts/cart-context";
import { useStore } from "../Contexts/store-context";
import { totalItems } from "../Utils/utils";

const Nav = () => {
  const { cartItems } = useCart();
  const { searchBy, productDispatch } = useStore();

  const activeStyle = {
    color: "#000",
    fontWeight: "bold",
  };
  return (
    <nav className="header" id="navbar">
      <NavLink to="/" end activeStyle={activeStyle} className="logo">
        <img width="80" src={music} alt="logo" />
        <span>
          <strong> RHYTHM STORE</strong>
        </span>
      </NavLink>

      <div className="search-container">
        <div className="search-box search">
          <i className="fas fa-search"></i>
          <span>
            <input
              type="text"
              name=""
              placeholder="Search for Products"
              value={searchBy}
              onChange={(e) =>
                productDispatch({
                  type: "SEARCH_BY_PRODUCT_TITLE",
                  payload: e.target.value,
                })
              }
            />
          </span>
        </div>
      </div>

      <NavLink to="/product-listing" activeStyle={activeStyle}>
        Products
      </NavLink>

      <NavLink
        to="/wishlist"
        activeStyle={activeStyle}
        className="avatar-badge-container cart"
      >
        <span className="avatar avatar-large">
          <i className="fas fa-heart"></i>
        </span>
      </NavLink>

      <NavLink
        to="/cart"
        activeStyle={activeStyle}
        className="avatar-badge-container cart"
      >
        <span className="avatar avatar-large">
          <i className="fas fa-shopping-cart "></i>
        </span>
        {totalItems(cartItems) >= 1 && (
          <span className="avatar-badge-icons-cart badge-avatar-large-icons cart badge-red">
            {totalItems(cartItems)}
          </span>
        )}
      </NavLink>

      <Link to="/">
        <span className="avatar avatar-small">
          {/* <img src={person} alt="avatar-sm" 
          /> */}
          <img src={avatar} alt="avatar-sm" />
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
