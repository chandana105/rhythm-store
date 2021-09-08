import { NavLink, Link, useLocation } from "react-router-dom";
import music from "../assets/images/music.svg";
// import avatar from "../assets/images/avatar.jpg";
import person from "../assets/images/person.png";
import { useData } from "../Contexts/data-context";
import { useStore } from "../Contexts/store-context";
import { totalItems } from "../Utils/utils";
import { useAuth } from "../Contexts/auth-context";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Nav = () => {
  const { cartItems, wishList } = useData();
  const { searchBy, productDispatch } = useStore();
  const {
    token,
    logoutHandler,
    user: { username },
  } = useAuth();
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(true);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (path === "/login" || path === "/signup") {
      setDisplay(false);
    }
  }, [path]);

  useEffect(() => {
    if (path === "/products" || path === `/categories/${categoryId}`) {
      setSearchDisplay(true);
    }
  }, [path, categoryId]);

  const activeStyle = {
    color: "#6D28D9 ",
  };
  return (
    <nav className="header" id="navbar">
      <NavLink to="/" end activeStyle={activeStyle} className="logo">
        <img width="80" src={music} alt="logo" />
        <span>
          <strong> RHYTHM STORE</strong>
        </span>
      </NavLink>

      {searchDisplay && (
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
      )}

      <NavLink to="/products" activeStyle={activeStyle} className="products">
        Products
      </NavLink>

      <NavLink
        to="/wishlist"
        activeStyle={activeStyle}
        className="avatar-badge-container cart tooltip"
      >
        <span className="avatar avatar-large">
          <i className="fas fa-heart"></i>
        </span>
        {wishList.length >= 1 && (
          <span className="avatar-badge-icons-cart badge-avatar-large-icons cart badge-red">
            {wishList.length}
          </span>
        )}
        <span className="tooltiptext">Wishlist</span>
      </NavLink>

      <NavLink
        to="/cart"
        activeStyle={activeStyle}
        className="avatar-badge-container cart tooltip"
      >
        <span className="avatar avatar-large">
          <i className="fas fa-shopping-cart "></i>
        </span>
        {totalItems(cartItems) >= 1 && (
          <span className="avatar-badge-icons-cart badge-avatar-large-icons cart badge-red">
            {totalItems(cartItems)}
          </span>
        )}
        <span className="tooltiptext">Cart</span>
      </NavLink>

      {display && (
        <div className="tooltip">
          <span className="avatar avatar-small">
            <img src={person} alt="avatar-sm" />
            {/* <img src={avatar} alt="avatar-sm" /> */}
          </span>
          <span className="tooltiplist">
            <div className="list-item-container">
              {!token ? (
                <div className="list-item">
                  <span>Welcome </span>
                  <small> To access WishList and Cart</small>
                  <button className="btn btn-primary">
                    <Link to="/login">LOGIN / SIGNUP </Link>
                  </button>
                </div>
              ) : (
                <div className="list-item">
                  <b>Hello {username}</b>
                </div>
              )}
              <div className="list-item">
                <Link to="/wishlist">
                  <span>WishList </span>
                </Link>
              </div>
              <div className="list-item">
                <Link to="/cart">
                  <span>Cart</span>
                </Link>
              </div>
              {token && (
                <>
                  <div className="list-item">
                    <Link to="/profile">
                      <span>Profile</span>
                    </Link>
                  </div>
                  <div className="list-item">
                    <button className="btn btn-primary" onClick={logoutHandler}>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
