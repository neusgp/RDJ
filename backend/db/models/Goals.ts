import { z } from "zod";
import { sequelize } from "../config";
import { DataTypes, Model } from "sequelize";

// to-do: separate validations and types in different files

const { STRING } = DataTypes;

export const GoalValidation = z.object({
  goal: z.string(),
  userId: z.string(),
});

export type GoalProps = z.infer<typeof GoalValidation> & { id?: Id };

interface GoalInstance extends Model<GoalProps>, GoalProps {}

export type PublicGoal = Pick<GoalInstance, "goal"> & { id: Id };

export type UserGoals = PublicGoal[];

export type Goal = string;

export const Goals = sequelize.define<GoalInstance>("goal", {
  goal: { type: STRING },
  userId: { type: STRING },
});
