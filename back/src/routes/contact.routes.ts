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
import { ensureUserIsOwnerMiddleware } from "../middlewares/users/ensureUserIsOwner.middleware";

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
  ensureUserIsOwnerMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactsController
);
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUserIsOwnerMiddleware,
  deleteContactsController
);

export { contactsRoutes };
