import React, { Dispatch, ReactNode } from "react";
import { LoginData } from "../validators/validator.login";
import { RegisterData } from "../validators/validator.register";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface UserProviderProps {
  children: ReactNode;
}

export interface LoginResponse {
  token: string;
}

export interface AuthContextValues {
  signIn: (data: LoginData) => Promise<void>;
  loading: boolean;
}

export interface RegisterContextValues {
  register: (data: RegisterData) => Promise<void>;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  createdAt?: string;
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
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export interface ModalProps {
  children: ReactNode;
  blockClosing?: boolean;
  toggleModal: () => void;
}

export interface ModalAddContactProps {
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
  toggleModal: () => void;
}

export interface ModalEditContactProps {
  contact: Contact;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
  toggleModal: () => void;
}

export interface ModalEditUserProps {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
  toggleUserModal: () => void;
}

export interface ModalErrorProps {
  toggleModal: () => void;
}

export interface AxiosInterceptorProps {
  children: ReactNode;
}
