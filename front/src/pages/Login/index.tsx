import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "../../validators/validator.login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import {
  ContactImg,
  Container,
  LoginContainer,
  LoginForm,
  StyledLink,
} from "./style";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();

  return (
    <Container>
      <ContactImg />
      <LoginContainer>
        <h2>Login</h2>
        <LoginForm onSubmit={handleSubmit(signIn)}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <button type="submit">Entrar</button>
          <span>Ainda não tem cadastro, </span>
          <StyledLink to="/register">clique aqui</StyledLink>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
};
