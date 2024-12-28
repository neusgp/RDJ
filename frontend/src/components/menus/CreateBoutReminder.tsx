import React, { useState } from "react";
import { Modal } from "../modals/lib";

export const CreateBoutReminderModal = ({
  handleIsOpen,
}: {
  handleIsOpen: () => void;
}) => {
  return (
    <Modal
      modalTitle="Create Bout Reminder"
      isClose
      handleIsOpen={handleIsOpen}>
      <form>Hello!</form>
    </Modal>
  );
};
