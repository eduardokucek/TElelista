import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const createContactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  // const contactEmail = await contactRepository.findOne({
  //   where: {
  //     email: data.email,
  //     user: user,
  //   },
  // });

  // const contactPhone = await contactRepository.findOne({
  //   where: {
  //     phone: data.phone,
  //     user: user,
  //   },
  // });

  // if (contactEmail || contactPhone) {
  //   throw new AppError("Contact already exists", 409);
  // }

  const contact = contactRepository.create({ ...data, user });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
