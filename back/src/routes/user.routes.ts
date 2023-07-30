import { Router } from "express";
import {
  createUserController,
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
userRoutes.patch(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);

export { userRoutes };
