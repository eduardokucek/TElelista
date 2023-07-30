import e, { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/list.contacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactsController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactsService(userId);

  return res.json(contacts);
};

const updateContactsController = async (req: Request, res: Response) => {
  const updateContact = await updateContactService(
    req.body,
    Number(req.params.id)
  );

  return res.json(updateContact);
};

const deleteContactsController = async (req: Request, res: Response) => {
  await deleteContactService(Number(req.params.id));

  return res.status(204);
};

export {
  createContactsController,
  listContactsController,
  updateContactsController,
  deleteContactsController,
};
