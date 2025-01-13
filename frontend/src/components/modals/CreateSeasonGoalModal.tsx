import React from "react";
import { Modal } from "./lib";
import { SeasonGoalsForm } from "../forms/SeasonGoalsForm";

export const CreateSeasonGoalModal = ({
  handleIsOpen,
}: {
  handleIsOpen: () => void;
}) => {
  return (
    <Modal modalTitle="Add Season Goals" isClose handleIsOpen={handleIsOpen}>
      <SeasonGoalsForm />
    </Modal>
  );
};
