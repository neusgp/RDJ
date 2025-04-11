import React, { ChangeEvent, useState } from "react";
import { InputField } from "./lib";
import { GoalsFromValidation } from "../../validation";
import { useGoals } from "../../hooks";
import { AddGoalsButton, DeleteButton, SubmitButton } from "../buttons";
import { getProvisionalId, PROVISIONAL } from "./lib";

export const SeasonGoalsForm = ({ close }: { close: () => void }) => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [goals, setGoals] = useState<GoalsFormProps>([]);

  const setInitialValues = (data: GoalsFormProps | undefined) => {
    return data
      ? setGoals(data)
      : setGoals([{ id: getProvisionalId(), goal: "" }]);
  };

  useGoals({ setInitialValues });

  const handleGoalValue = (
    e: ChangeEvent<HTMLInputElement>,
    rowIndex?: number
  ) => {
    if (rowIndex === undefined) return;

    const editedGoal = e.target.value;

    const newGoals = goals?.map((goal, i) => {
      return i === rowIndex ? { id: goal.id, goal: editedGoal } : goal;
    });
    setGoals(newGoals);
  };

  const handleDelete = (rowIndex: number) => {
    const newGoals = goals.filter((goal, i) => i !== rowIndex);
    setGoals(newGoals); // Update the state
  };

  const handleAddGoal = () => {
    setGoals([...goals, { id: getProvisionalId(), goal: "" }]);
  };

  const handleSubmit = () => {
    const goalsToSubmit = goals
      .map(({ id, goal }) => {
        if (!goal) return;
        return id.toString().startsWith(PROVISIONAL) ? { goal } : { id, goal };
      })
      .filter((g) => !!g);

    const { error } = GoalsFromValidation.safeParse(goalsToSubmit);
    console.log(error);
    if (!!error)
      return setSubmitError(
        "Some information's format is not valid. Try again."
      );

    fetch("http://localhost:8081/save-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(goalsToSubmit),
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        close();
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3" id="form-fields">
        {goals.map(({ id, goal }, rowIndex) => {
          return (
            <div className="flex items-center gap-3" key={id}>
              <InputField
                name="goal"
                type="string"
                defaultValue={goal}
                rowIndex={rowIndex}
                handleValue={handleGoalValue}
              />
              <DeleteButton handleDelete={handleDelete} rowIndex={rowIndex} />
            </div>
          );
        })}
      </div>
      <AddGoalsButton handleAddGoal={handleAddGoal} />
      <SubmitButton label="Save" intent="primary" onClick={handleSubmit} />
    </div>
  );
};
