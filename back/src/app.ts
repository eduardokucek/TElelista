import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { userRoutes } from "./routes/user.routes";
import { handleAppError } from "./middlewares/errors/handleAppError.middleware";
import { sessionRoutes } from "./routes/session.routes";
import { contactsRoutes } from "./routes/contact.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", optionsSuccessStatus: 200 }));
app.use("/session", sessionRoutes);
app.use("/users", userRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleAppError);

export default app;
