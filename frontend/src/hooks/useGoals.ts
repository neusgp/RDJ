import { ChangeEvent, useEffect, useState } from "react";
import { getProvisionalId } from "../components";

export const useGoals = (): {
  goals: GoalsFormProps;
  handleAddGoal: () => void;
  handleDeleteGoal: (rowIndex: number) => void;
  handleGoalValue: (
    e: ChangeEvent<HTMLInputElement>,
    rowIndex?: number
  ) => void;
} => {
  const [goals, setGoals] = useState<GoalsFormProps>([]);

  const handleDeleteGoal = (rowIndex: number) => {
    const newGoals = goals.filter((goal, i) => i !== rowIndex);
    setGoals(newGoals); // Update the state
  };

  const handleAddGoal = () => {
    setGoals([...goals, { id: getProvisionalId(), goal: "" }]);
  };

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

  useEffect(() => {
    fetch("http://localhost:8081/get-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setGoals(data);
        } else {
          setGoals([{ id: getProvisionalId(), goal: "" }]);
        }
      })
      .catch();
  }, []);

  return { goals, handleAddGoal, handleDeleteGoal, handleGoalValue };
};
