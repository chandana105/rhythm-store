import Navbar from "../../Components/Nav";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container login-container" id="empty-wishlist">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <h3>SIGN UP</h3>
            <div className="simple-input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </div>

            <div className="simple-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="simple-input password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <i className="fas fa-eye"></i>
            </div>
            <button className="btn btn-primary">SIGN UP</button>
            <p>
              Already a user?{" "}
              <u className="sign-up">
                <Link to="/login">LOGIN</Link>
              </u>{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
