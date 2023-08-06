import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { listUserByIdService } from "../services/users/listUserById.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await listUserByIdService(res.locals.userId);

  return res.json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("ENTROU NO CONTROLLER");

  const updateUser = await updateUserService(req.body, res.locals.userId);

  return res.json(updateUser);
};

const deleteUserController = async () => {};

export {
  createUserController,
  listUserByIdController,
  updateUserController,
  deleteUserController,
};
