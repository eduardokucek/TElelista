import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvides";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
