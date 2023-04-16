import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { getTokenStorage } from "~/util/storage";

const PrivateRoute = (children: PropsWithChildren) => {
  const token = getTokenStorage();
  return <>{token ? { children } : <Navigate to="/login" replace />}</>;
};

export default PrivateRoute;
