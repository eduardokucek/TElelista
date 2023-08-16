import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TUSer } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";

const listUserByIdService = async (userId: number): Promise<TUSer> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return userSchema.parse(user);
};

export { listUserByIdService };
