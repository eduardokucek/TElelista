import { createContext, useEffect, useState } from "react";
import { LoginData } from "../validators/validator.login";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  AuthContextValues,
  AuthProviderProps,
  LoginResponse,
} from "../interfaces";

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("telelista:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post<LoginResponse>("/session", data);

      const { token } = response.data;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      localStorage.setItem("telelista:token", token);
      setLoading(false);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
