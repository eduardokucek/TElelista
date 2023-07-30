import { Router } from "express";
import { createTokenController } from "../controller/login.controller";

const sessionRoutes = Router();

sessionRoutes.post("", createTokenController);

export { sessionRoutes };
