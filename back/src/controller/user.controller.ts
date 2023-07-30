import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const updateUserController = async (req: Request, res: Response) => {
  const updateUser = await updateUserService(req.body, res.locals.userId);

  return res.json(updateUser);
};

const deleteUserController = async () => {};

export { createUserController, updateUserController, deleteUserController };
