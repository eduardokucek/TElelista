import { UserProviderProps } from "../interfaces";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: UserProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};
