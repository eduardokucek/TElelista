import { z } from "zod";
import {
  userSchema,
  userSchemaResponse,
  userSchmeaRequest,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type TUSer = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchmeaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdate = DeepPartial<TUserRequest>;

export { TUSer, TUserRequest, TUserResponse, TUserUpdate };
