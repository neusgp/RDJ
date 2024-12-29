import { z } from "zod";
import { sequelize } from "../config";
import { DataTypes, Model } from "sequelize";

// to-do: separate validations and types in different files

const { STRING } = DataTypes;

export const UserValidation = z.object({
  email: z.string().email(),
  password: z.string(),
  //.regex(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")),
});

type UserProps = z.infer<typeof UserValidation> & { id?: string };

interface UserInstance extends Model<UserProps>, UserProps {}

export type PublicUser = Pick<UserInstance, "email"> & { id: string };

export const User = sequelize.define<UserInstance>("user", {
  email: { type: STRING, unique: true },
  password: { type: STRING },
});
