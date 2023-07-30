import { useEffect, useState } from "react";
import { AxiosInterceptorProps } from "../interfaces";
import axios from "axios";
import { api } from "../services/api";
import { ModalError } from "../components/ModalError";

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }

      if (error.response?.status == 401) {
        setIsOpenModal(true);
      }

      if (error.response?.status == 409) {
        setIsOpenModal(true);
      }

      return Promise.reject(error);
    };

    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return (
    <>
      {isOpenModal && (
        <ModalError toggleModal={() => setIsOpenModal(!isOpenModal)} />
      )}
      {children}
    </>
  );
};
