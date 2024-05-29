import { Navigate, Route } from "react-router-dom";

import useUser from "hooks/useUser";

interface IProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute = ({ path, element }: IProps) => {
  const { userName } = useUser();

  if (!userName) {
    return <Navigate to="/" replace />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
