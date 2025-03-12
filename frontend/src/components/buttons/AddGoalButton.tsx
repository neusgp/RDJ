import React from "react";

export const AddGoalsButton = ({
  handleAddGoal,
}: {
  handleAddGoal: () => void;
}) => (
  <button
    type="button"
    onClick={() => handleAddGoal()}
    className="text-purple-500 self-end">
    Add goal
  </button>
);
