import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const user = useSelector(state => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
