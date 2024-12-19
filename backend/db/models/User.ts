import { z } from "zod";
import { sequelize } from "../config";
import { DataTypes, Model, ModelDefined } from "sequelize";

// to-do: separate validations and types in different files

const { STRING } = DataTypes;

export const UserValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    //.regex(new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")),
});

export type UserProps = z.infer<typeof UserValidation> & {id?: String};

interface UserInstance extends Model<UserProps>, UserProps {}

export const User = sequelize.define<UserInstance>("user", {
  email: { type: STRING, unique: true },
  password: { type: STRING },
});
