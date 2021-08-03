import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export const PrivateRoute = ({ path, ...props }) => {
  // const loginStatus = JSON.parse(localStorage?.getItem("login"));
  const { isUserLoggedIn } = useAuth();
  console.log({isUserLoggedIn})
  return isUserLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
