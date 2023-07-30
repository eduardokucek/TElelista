import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";

const ensureUserDataAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUserEmail = await userRepository.findOne({
    where: { email: req.body.email },
  });

  const findUserPhone = await userRepository.findOne({
    where: { phone: req.body.phone },
  });

  if (findUserEmail) {
    throw new AppError("User with this email already exists", 409);
  }

  if (findUserPhone) {
    throw new AppError("User with this phone already exists", 409);
  }

  next();
};

export { ensureUserDataAlreadyExistsMiddleware };
