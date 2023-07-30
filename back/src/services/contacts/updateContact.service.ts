import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { AppError } from "../../errors/AppError";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  data: TContactUpdate,
  contactId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const actualContact = await contactRepository.findOneBy({ id: contactId });

  if (!actualContact) {
    throw new AppError("Contact not found :/", 404);
  }

  const newContactData = contactRepository.create({
    ...actualContact,
    ...data,
  });

  await contactRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };
