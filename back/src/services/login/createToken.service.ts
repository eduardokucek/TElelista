import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async ({ email, password }: TLoginRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  // SECRET_KEY é a assinatura da API. Serve para diferenciar onde está sendo realizado o login. Garante que o token gerado é para acessar uma API específica.
  const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: String(user.id),
  });

  return token;
};

export { createTokenService };
