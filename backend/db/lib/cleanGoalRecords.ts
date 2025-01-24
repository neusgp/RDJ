import { GoalEntry, Goals } from "../models";

export const cleanGoalRecords = async ({
  goals,
  userId,
}: {
  goals: GoalEntry[];
  userId: Id;
}) => {
  const formIds = goals.map(({ id }) => id);
  const existentGoals = await Goals.findAll({
    where: { userId },
    attributes: ["id"],
  });

  const existentGoalsIds = existentGoals.map(({ dataValues }) => dataValues.id);
  console.log(existentGoalsIds, formIds);
  const toDelete = existentGoalsIds.filter(
    (id) => !!id && !formIds.includes(id)
  );

  toDelete.forEach(
    async (id) => !!id && (await Goals.destroy({ where: { id } }))
  );
};
