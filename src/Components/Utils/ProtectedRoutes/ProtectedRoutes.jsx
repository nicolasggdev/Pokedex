import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // If name doesn't exists, you can't view the others elements
  if (sessionStorage.getItem("name")) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
