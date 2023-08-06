import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const updateUserService = async (
  data: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  console.log("ENTROU NO SERVICE");

  const userRepository = AppDataSource.getRepository(User);
  const actualUserData = await userRepository.findOneBy({ id: userId });

  if (!actualUserData) {
    throw new AppError("Contact not found :/", 404);
  }

  const newUserData = userRepository.create({
    ...actualUserData,
    ...data,
  });

  await userRepository.save(newUserData);

  return contactSchema.parse(newUserData);
};

export { updateUserService };
