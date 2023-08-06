import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "../../validators/validator.login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { ContactImg, Container } from "./style";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();

  return (
    <Container>
      <ContactImg />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Entrar</button>
        <Link to="/register">Ainda não tem cadastro, clique aqui</Link>
      </form>
    </Container>
  );
};
