import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  phone: z.string().max(14),
  createdAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({ id: true, createdAt: true });
const contactSchemaResponse = contactSchema;
const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();

const contactsSchemaResponse = z.array(contactSchemaResponse);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaUpdate,
  contactSchemaResponse,
  contactsSchemaResponse,
};
