import { Link } from "react-router-dom";
import music from "../images/music.svg";
import avatar from "../images/avatar.jpg";
// import person from '../images/person.png'

const Nav = () => {
  return (
    <nav className="header" id="navbar">
      <Link to="/" className="logo">
        <img width="80" src={music} alt="logo" />
        <span>
          <strong> RHYTHM STORE</strong>
        </span>
      </Link>

      <div className="search-container">
        <div className="search-box search">
          <i className="fas fa-search"></i>
          <span>
            <input type="text" name="" placeholder="Search..." />
          </span>
        </div>
      </div>

      <Link to="/product-listing" className="docs active">
        Products
      </Link>

      <Link to="/wishlist" className="avatar-badge-container cart">
        <span className="avatar avatar-large">
          <i className="far fa-heart"></i>
        </span>
        <span className="avatar-badge-icons-cart badge-avatar-large-icons cart badge-red">
          1
        </span>
      </Link>

      <Link to="/cart" className="avatar-badge-container cart">
        <span className="avatar avatar-large">
          <i className="fas fa-shopping-cart "></i>
        </span>
        <span className="avatar-badge-icons-cart badge-avatar-large-icons cart badge-red">
          1
        </span>
      </Link>

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
