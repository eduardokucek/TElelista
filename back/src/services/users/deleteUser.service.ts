import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const userToDelete = await userRepository.findOneBy({ id: userId });

  if (!userToDelete) {
    throw new AppError("User not found", 404);
  }

  await userRepository.remove(userToDelete);
};

export { deleteUserService };
