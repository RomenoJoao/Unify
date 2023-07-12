import z from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(3,"O nome deve ter pelo menos 3 caracteres" ),
  lastname: z
    .string()
    .min(3,"O nome deve ter pelo menos 3 caracteres" ),
  date: z.string().optional(),
    email: z
      .string()
      .email("Deve serEmail valido" )
      .refine((vaue) => vaue.includes("@isptec.co.ao"), {
        message: "Deve ser email institucional",
      }),
    password: z.string().min(6,"Password invalida" ),
    role: z.string().optional(),
    username: z
      .string()
      .min(6,"Deve conter mais de 6 caracteres" )
      .optional(),
});
