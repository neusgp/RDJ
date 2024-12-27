import React from "react";
import { InputField, SubmitButton } from "../forms";
import { ConfirmModal } from "./lib";

export const LogOutModal = ({ handleIsOpen }: { handleIsOpen: () => void }) => {
  return (
    <ConfirmModal handleIsOpen={handleIsOpen}>
      <p>Are you sure you want to log out?</p>
    </ConfirmModal>
  );
};
