import React, { useState } from "react";
import { InputField, SubmitButton } from "./lib";

type Goal = { goal: string; id?: string };
type GoalProps = Goal[];

const removeGoalRow = (i: number) => {
  const form = document.getElementById("form-fields");
  const formRow = document.getElementById(i.toString());
  if (!!form && !!formRow) form.removeChild(formRow);
};

const getSeasonGoalsFormValues = (
  e: React.FormEvent<HTMLFormElement>
): GoalProps => {
  const formData = new FormData(e.currentTarget);

  const formValues = [];
  for (let [key, value] of formData.entries()) {
    formValues.push({ [key]: value });
  }
  console.log(formValues);
  return formValues as GoalProps;
};

export const SeasonGoalsForm = () => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [goals, setGoals] = useState<Goal[]>([{ goal: "" }]);

  //const { data: initialValues } = useSeasonGoals();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSeasonGoalsFormValues(e);

    //send to db
  };
  return (
    <form
      className="flex flex-col gap-6"
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-3" id="form-fields">
        {goals.map(({ goal }, i) => {
          return (
            <div className="flex items-center gap-3" id={i.toString()} key={i}>
              <InputField
                name="goal"
                type="string"
                defaultValue={goal}></InputField>
              <button
                onClick={() => {
                  removeGoalRow(i);
                }}>
                x
              </button>
            </div>
          );
        })}
      </div>

      <button onClick={() => setGoals([...goals, { goal: "" }])}>
        Add goal
      </button>
      <SubmitButton label="Save" intent="save" />
    </form>
  );
};
