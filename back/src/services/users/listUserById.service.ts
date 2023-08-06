import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const listUserByIdService = async (userId: number): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return userSchemaResponse.parse(user);
};

export { listUserByIdService };
