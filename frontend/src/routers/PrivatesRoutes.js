import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivatesRoutes = () => {
  const { isLoggedIn } = useSelector((action) => action.auth);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivatesRoutes };
