import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton } from "./lib";
import { GoalsFromValidation } from "../../validation";

type GoalEntry = { id?: string; goal: string };
type GoalsFormProps = GoalEntry[];

export const SeasonGoalsForm = () => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [goals, setGoals] = useState<GoalEntry[]>([{ goal: "" }]);

  //const { data } = useSeasonGoals();

  const initialValues = [{ goal: "" }]; // data

  const handleGoalValue = (
    e: ChangeEvent<HTMLInputElement>,
    rowIndex?: number
  ) => {
    if (rowIndex === undefined) return;

    const editedGoal = e.target.value;

    const newGoals = goals.map((goal, i) => {
      return i === rowIndex ? { id: goal.id, goal: editedGoal } : goal;
    });
    setGoals(newGoals);
  };

  const handleSubmit = () => {
    const { error } = GoalsFromValidation.safeParse(goals);

    if (!!error)
      return setSubmitError(
        "Some information's format is not valid. Try again."
      );

    fetch("http://localhost:8081/save-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(goals),
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        window.location.reload();
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  console.log("goals", goals);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3" id="form-fields">
        {goals.map(({ goal }, rowIndex) => {
          return (
            <div className="flex items-center gap-3" key={rowIndex}>
              <InputField
                name="goal"
                type="string"
                defaultValue={goal}
                rowIndex={rowIndex}
                handleValue={handleGoalValue}></InputField>
              <button
                onClick={() => {
                  const newGoals = goals.filter((goal, i) => i !== rowIndex);
                  setGoals(newGoals);
                }}>
                x
              </button>
            </div>
          );
        })}
      </div>

      <button type="button" onClick={() => setGoals([...goals, { goal: "" }])}>
        Add goal
      </button>
      <SubmitButton label="Save" intent="save" onClick={handleSubmit} />
    </div>
  );
};
