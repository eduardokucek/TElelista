import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { name, email, phone, password } = data;
  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};

export { createUserService };
