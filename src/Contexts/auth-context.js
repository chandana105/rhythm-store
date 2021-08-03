import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fakeFetchApi } from "../PrivateRoutes/Login & SignUp/fakeFetchApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage?.getItem("login"));
    console.log({ loginStatus });

    loginStatus?.isUserLoggedIn && setLogin(true);
  }, []);

  const loginUserWithCredentials = async (username, password, state) => {
    try {
      const response = await fakeFetchApi(username, password);
      // console.log(response);
      if (response.success) {
        setLogin(true);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true })
        );
        navigate(state?.from ? state.from : "/");
      }
    } catch (err) {
      console.log("wrong username/password", err);
    }
  };

  const logoutHandler = () => {
    setLogin(false);
    localStorage?.removeItem("login");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, loginUserWithCredentials, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};



 