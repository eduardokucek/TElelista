import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
