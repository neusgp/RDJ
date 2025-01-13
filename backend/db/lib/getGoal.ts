import { Goals, UserGoals } from "../models";

export const getGoals = async ({
  id,
}: {
  id: string;
}): Promise<UserGoals | undefined> => {
  const userGoals = await Goals.findAll({ where: { userId: id } });

  if (!userGoals) return;

  const publicUserGoals = userGoals.map(({ goal, id }) => {
    if (!id) throw new Error("bd goal row has no id");

    return { id, goal };
  });

  return publicUserGoals;
};
