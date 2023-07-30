import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";

const listContactsService = async (
  userId: number
): Promise<TContactsResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contactsTest = await contactRepository.find();

  const contacts = await contactRepository.find({
    where: { user: user },
  });

  return contactsSchemaResponse.parse(contacts);
};

export { listContactsService };
