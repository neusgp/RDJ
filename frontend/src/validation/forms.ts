import { z } from "zod";

export const RegisterFormValidation = z.object({
  email: z.string().email(),
  password: z.string(),
  //.regex(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")),
});

//todo: add regex
export const ProfileFormValidation = z.object({
  name: z.string().optional(),
  derbyName: z.string().optional(),
  number: z.string().optional(),
  league: z.string().optional(),
});

const goalValidation = z.string();

export const GoalsFromValidation = z.array(goalValidation);
