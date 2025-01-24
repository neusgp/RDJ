import { z } from "zod";
import { sequelize } from "../config";
import { DataTypes, Model } from "sequelize";

// to-do: separate validations and types in different files

const { STRING } = DataTypes;

//todo: add regex validation!
export const ProfileValidation = z.object({
  name: z.string().optional(),
  derbyName: z.string().optional(),
  number: z.string().optional(), //number = string? :S
  league: z.string().optional(),
  userId: z.string(),
});

export type ProfileProps = z.infer<typeof ProfileValidation> & {
  id?: string;
};

interface ProfileInstance extends Model<ProfileProps>, ProfileProps {}

export type PublicProfile = Pick<
  ProfileInstance,
  "name" | "derbyName" | "number" | "league" | "userId"
> & { id: string };

export const Profile = sequelize.define<ProfileInstance>("profile", {
  name: { type: STRING },
  derbyName: { type: STRING },
  number: { type: STRING },
  league: { type: STRING },
  userId: { type: STRING },
});
