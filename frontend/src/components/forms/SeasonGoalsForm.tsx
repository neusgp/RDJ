import React, { useState } from "react";
import { InputField, SubmitButton } from "./lib";
import { GoalsFromValidation } from "../../validation";

type Goals = string[];
type GoalEntry = { goal: string };

const removeGoalRow = (i: number) => {
  const form = document.getElementById("form-fields");
  const formRow = document.getElementById(i.toString());
  if (!!form && !!formRow) form.removeChild(formRow);
};

const getSeasonGoalsFormValues = (
  e: React.FormEvent<HTMLFormElement>
): Goals => {
  const formData = new FormData(e.currentTarget);

  const formValues = [];
  for (let [key, value] of formData.entries()) {
    formValues.push(value);
  }

  return formValues as Goals;
};

export const SeasonGoalsForm = () => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [rows, setRows] = useState<GoalEntry[]>([{ goal: "" }]);

  //const { data: initialValues } = useSeasonGoals();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const goals = getSeasonGoalsFormValues(e);

    const { error } = GoalsFromValidation.safeParse(goals);

    console.log("error:", error);

    if (!!error)
      return setSubmitError(
        "Some information's format is not valid. Try again."
      );

    fetch("http://localhost:8081/save-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ goals }),
      credentials: "include",
    }).then(async (res) => {
      console.log(res);
      if (res.ok) {
        window.location.reload();
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <form
      className="flex flex-col gap-6"
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-3" id="form-fields">
        {rows.map(({ goal }, i) => {
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

      <button type="button" onClick={() => setRows([...rows, { goal: "" }])}>
        Add goal
      </button>
      <SubmitButton label="Save" intent="save" />
    </form>
  );
};
