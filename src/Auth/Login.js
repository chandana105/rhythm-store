import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useAuth } from "../Contexts/auth-context";
import { useStore } from "../Contexts/store-context";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Nav";
import { Link } from "react-router-dom";
import { TextField } from "./TextField";
import Spinner from "../Components/Spinner";

const Login = () => {
  const { loginHandler, error, token } = useAuth();
  const { state } = useLocation();
  const { showLoader } = useStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    token && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const enableShowPassword = () => {
    setShowPassword((prev) => !prev);
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must Contain 8 Characters")
      .required("Password is required"),
  });

  return (
    <div className="container login-container" id="empty-wishlist">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-wishlist-card">
            <h3>LOGIN</h3>
            <p className="input-validation">{error}</p>
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={(values) => {
                // console.log(values);
                loginHandler(values, state);
              }}
            >
              {(formik) => {
                const { isValid, dirty } = formik;
                return (
                  <Form>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type={passwordType}
                      showPassword={showPassword}
                      enableShowPassword={enableShowPassword}
                      placeholder="Enter your password"
                    />
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        !(dirty && isValid && !showLoader) && "disabled"
                      }`}
                      disabled={!(dirty && isValid && !showLoader)}
                    >
                      {showLoader ? (
                        <Spinner type="ThreeDots" color=" #fff" height={20} />
                      ) : (
                        "LOGIN"
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
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



