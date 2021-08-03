import { useAuth } from "../../Contexts/auth-context";
import {  useLocation } from "react-router-dom";
import Navbar from "../../Components/Nav";
import { Link } from "react-router-dom";

// import './Login.css';

const Login = () => {
  const { loginUserWithCredentials } = useAuth();

  const { state } = useLocation();


  const loginHandler = () => {
    loginUserWithCredentials("chandana", "smile" , state);
  };

  return (
    <div className="container login-container" id="empty-wishlist">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <h3>LOGIN</h3>
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
            <button className="btn btn-primary" onClick={loginHandler}>
              LOGIN
            </button>
            <p>
              Don't have an account?{" "}
              <u className="sign-up">
                <Link to="/signup">SIGN UP</Link>
              </u>{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;

