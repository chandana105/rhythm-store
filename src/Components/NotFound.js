import { Link } from "react-router-dom";

import pagenotfound from "../assets/images/pagenotfound.svg";

const NotFound = () => {
  return (
    <div className="container wish-container" id="empty-wishlist">
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <p>The Route you are looking can't be found :(</p>
            <img src={pagenotfound} alt="wishlist" />
            <button className="btn btn-primary">
              <Link to="/">TAKE ME HOME</Link>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
