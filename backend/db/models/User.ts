import { z } from "zod";
import { sequelize } from "../config";
import { DataTypes, Model } from "sequelize";

// to-do: separate validations and types in different files

const { STRING } = DataTypes;

export const UserValidation = z.object({
  email: z.string().email(),
  //pw must contain at least 8 characters, at least one letter and one number
  password: z.string().regex(new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")),
});

export type User = z.infer<typeof UserValidation>;

export const User = sequelize.define("user", {
  email: { type: STRING, unique: true },
  password: { type: STRING },
});
