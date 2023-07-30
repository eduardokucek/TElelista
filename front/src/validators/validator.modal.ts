import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "O nome precisa ter no mínimo 3 caracteres  ")
    .max(45, "O nome não pode ter mais que 45 caracteres"),
  email: z
    .string()
    .email()
    .max(45, "O e-mail não pode ter mais que 45 caracteres"),
  phone: z.string().max(14, "O telefone tem números a mais"),
  createdAt: z.string(),
});

export type ContactData = z.infer<typeof contactSchema>;
