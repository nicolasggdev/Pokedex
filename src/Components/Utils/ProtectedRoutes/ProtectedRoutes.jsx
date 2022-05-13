import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ name }) => {
  // If name doesn't exists, you can't view the others elements
  if (name) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
