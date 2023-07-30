import React, { Dispatch, ReactNode } from "react";
import { LoginData } from "../validators/validator.login";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginResponse {
  token: string;
}

export interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  loading: boolean;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface CardProps {
  contact: Contact;
}

export interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockClosing?: boolean;
}

export interface ModalAddContactProps {
  toggleModal: () => void;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export interface ModalErrorProps {
  toggleModal: () => void;
}

export interface AxiosInterceptorProps {
  children: ReactNode;
}
