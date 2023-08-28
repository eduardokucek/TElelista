import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/session/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from "../controller/contacts.controller";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSchemaRequest),

  createContactsController
);
contactsRoutes.get("", ensureAuthMiddleware, listContactsController);
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactsController
);
contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactsController);

export { contactsRoutes };
