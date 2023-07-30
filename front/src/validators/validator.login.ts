import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("O formato do campo e-mail é inválido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type LoginData = z.infer<typeof loginSchema>;
