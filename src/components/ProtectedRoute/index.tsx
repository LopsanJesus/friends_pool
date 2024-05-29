import { Navigate, Outlet } from "react-router-dom";

import useUser from "hooks/useUser";

const ProtectedRoute = () => {
  const { userName } = useUser();

  if (!userName) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
