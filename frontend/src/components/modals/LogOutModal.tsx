import React from "react";
import { ConfirmModal } from "./lib";
import { logout } from "../../api";

export const LogOutModal = ({ handleIsOpen }: { handleIsOpen: () => void }) => {
  const onConfirm = async () => {
    await logout();
  };

  return (
    <ConfirmModal handleIsOpen={handleIsOpen} onConfirm={onConfirm}>
      <p>Are you sure you want to log out?</p>
    </ConfirmModal>
  );
};
