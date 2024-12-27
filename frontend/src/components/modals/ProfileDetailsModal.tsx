import React from "react";
import { InputField, SubmitButton } from "../forms";
import { Modal } from "./lib";

export const ProfileDetailsModal = ({
  handleIsOpen,
}: {
  handleIsOpen: () => void;
}) => {
  return (
    <Modal modalTitle="Profile Details" isClose handleIsOpen={handleIsOpen}>
      <form className="flex flex-col justify-center gap-6">
        <InputField label="Real name" type="string" />
        <InputField label="Derby name" type="string" />
        <InputField label="Number" type="number" min={0} />
        <InputField
          label="Leage"
          type="string"
          placeholder="Enter city or team"
        />
        <SubmitButton label="Save" intent="save" />
      </form>
    </Modal>
  );
};
