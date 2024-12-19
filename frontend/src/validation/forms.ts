import { z } from "zod";

export const RegisterFormValidation = z.object({
    email: z.string().email(),
    password: z.string(),
    //.regex(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")),
  });
  