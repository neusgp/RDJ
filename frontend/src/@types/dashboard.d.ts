import { z } from "zod";
import { ProfileFormValidation } from "../validation";

//profile
type ProfileProps = z.infer<typeof ProfileFormValidation>;

//season goals
type Goal = { id: Id; goal: string };
type GoalsProps = Goal[];

export type DashboardProps = {
  profile: Pick<ProfileProps, "derbyName">;
  goals: GoalsProps;
  //todo: add more props as I have more data
};
