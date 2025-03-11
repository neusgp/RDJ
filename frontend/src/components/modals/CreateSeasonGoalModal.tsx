import React from "react";
import { Modal } from "./lib";
import { SeasonGoalsForm } from "../forms/SeasonGoalsForm";
import { useGoals } from "../../hooks";

export const CreateSeasonGoalModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal modalTitle="Add Season Goals" onClose={onClose}>
      <SeasonGoalsForm />
    </Modal>
  );
};
