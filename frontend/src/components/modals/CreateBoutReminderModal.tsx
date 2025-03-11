import React from "react";
import { Modal } from "./lib";

export const CreateBoutReminderModal = ({
  onClose,
}: {
  onClose: () => void;
}) => {
  return (
    <Modal modalTitle="Create Bout Reminder" onClose={onClose}>
      <form>Hello!</form>
    </Modal>
  );
};
