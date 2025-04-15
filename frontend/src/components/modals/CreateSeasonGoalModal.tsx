import React from "react";
import { Modal } from "./lib";
import { SeasonGoalsForm } from "../forms/SeasonGoalsForm";

export const CreateSeasonGoalModal = ({
  onClose,
  refreshDashboard,
}: {
  onClose: () => void;
  refreshDashboard: () => void;
}) => {
  return (
    <Modal modalTitle="Add Season Goals" onClose={onClose}>
      <SeasonGoalsForm close={onClose} refreshDashboard={refreshDashboard} />
    </Modal>
  );
};
