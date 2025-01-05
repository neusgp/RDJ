import { z } from "zod";
import { ProfileFormValidation } from "../validation";

type ProfileProps = z.infer<typeof ProfileFormValidation> & {
  id?: string;
};

//todo: add more props as I have more data available
export type DashboardProps = { profile: Pick<ProfileProps, "derbyName"> };
