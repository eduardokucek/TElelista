import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  phone: z.string().max(14),
  password: z.string().max(120),
  createdAt: z.string(),
});

const userSchmeaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const userSchemaUpdate = userSchema
  .omit({ id: true, createdAt: true })
  .partial();

export { userSchema, userSchmeaRequest, userSchemaResponse, userSchemaUpdate };
