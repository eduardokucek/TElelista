import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserByIdController,
  updateUserController,
} from "../controller/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaUpdate, userSchmeaRequest } from "../schemas/users.schemas";
import { ensureUserDataAlreadyExistsMiddleware } from "../middlewares/users/ensureUserDataAlreadyExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/session/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchmeaRequest),
  ensureUserDataAlreadyExistsMiddleware,
  createUserController
);
userRoutes.get("/:id", ensureAuthMiddleware, listUserByIdController);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);

export { userRoutes };
