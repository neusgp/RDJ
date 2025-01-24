import { GoalProps, Goals, GoalValidation } from "../models";

export const saveGoal = async ({
  goal,
  id,
  userId,
}: GoalProps): Promise<void | number | [affectedCount: number]> => {
  GoalValidation.parse({
    goal,
    userId,
    id,
  });

  if (!id) {
    await Goals.create({ goal, userId });
  } else {
    const existentGoal = await Goals.findOne({
      where: { id: id, userId: userId },
    });
    if (!!existentGoal) {
      const { id: existentId } = existentGoal;
      if (!existentId) throw new Error("db profile row has no id");

      await Goals.update({ goal }, { where: { id: existentId } });
    }
  }
};
