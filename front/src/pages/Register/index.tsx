import { useForm } from "react-hook-form";
import {
  RegisterData,
  registerSchema,
} from "../../validators/validator.register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces";
import { api } from "../../services/api";

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const createUser = async (data: RegisterData) => {
    await api.post<User>("/users", data);

    navigate("/");
  };

  return (
    <main>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
};
