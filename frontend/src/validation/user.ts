import { z } from "zod";

export const EmailValidation = z.object({
    email: z.string().email({ message: "Email must have a valid format" }),
  });

//todo: add regex validation
export const PasswordValidation = z.object({
  password: z.string()
});