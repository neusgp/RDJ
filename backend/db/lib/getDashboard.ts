import { getGoals } from "./getGoal";
import { getProfile } from "./getProfile";

export const getDashboard = async ({ id }: { id: string }) => {
  const { derbyName } = (await getProfile({ id })) || {};
  const goals = await getGoals({ id });

  return { profile: { derbyName }, goals };
};
