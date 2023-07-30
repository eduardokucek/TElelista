import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const ensureUserIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactId = Number(req.params.id);
  const userId = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    res.status(404).json({
      message: "Contact not found",
    });
  }

  if (contact?.user.id != userId) {
    res.status(403).json({
      message: "You don't have permission",
    });
  }

  return next();
};

export { ensureUserIsOwnerMiddleware };
