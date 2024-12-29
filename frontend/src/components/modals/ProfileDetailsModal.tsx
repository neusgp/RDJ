import React from "react";
import { ProfileForm } from "../forms";
import { Modal } from "./lib";

export const ProfileDetailsModal = ({
  handleIsOpen,
}: {
  handleIsOpen: () => void;
}) => {
  return (
    <Modal modalTitle="Profile Details" isClose handleIsOpen={handleIsOpen}>
      <ProfileForm />
    </Modal>
  );
};
