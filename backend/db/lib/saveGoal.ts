import { GoalProps, Goals, GoalValidation } from "../models";

//todo: how do we handle the user deleting an input field on the ui?
export const saveGoal = async ({ goal, userId }: GoalProps): Promise<void> => {
  GoalValidation.parse({
    goal,
    userId,
  });

  const existentGoal = await Goals.findOne({ where: { userId } });

  if (!!existentGoal) {
    const { id: existentId } = existentGoal;
    if (!existentId) throw new Error("db profile row has no id");

    await Goals.update({ goal }, { where: { id: existentId } });
  } else {
    await Goals.create({ goal, userId });
  }
};
