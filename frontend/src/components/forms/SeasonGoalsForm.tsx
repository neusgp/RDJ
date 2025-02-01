import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton } from "./lib";
import { GoalsFromValidation } from "../../validation";
import { useGoals } from "../../hooks";

type GoalEntry = { id: string | number; goal: string };
export type GoalsFormProps = GoalEntry[];
const PROVISIONAL = "provisional";

export const getProvisionalId = () => {
  const number1 = Math.random();
  const number2 = Math.random();
  return `${PROVISIONAL}-${number1}${number2}`;
};

export const SeasonGoalsForm = () => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [goals, setGoals] = useState<GoalsFormProps>([]);

  const setInitialValues = (data: GoalsFormProps | undefined) => {
    return data
      ? setGoals(data)
      : setGoals([{ id: getProvisionalId(), goal: "" }]);
  };

  const { loading } = useGoals({ setInitialValues });

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
        window.location.reload();
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
              <button onClick={() => handleDelete(rowIndex)}>x</button>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() =>
          setGoals([...goals, { id: getProvisionalId(), goal: "" }])
        }>
        Add goal
      </button>
      <SubmitButton label="Save" intent="save" onClick={handleSubmit} />
    </div>
  );
};
