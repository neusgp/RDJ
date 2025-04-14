import React from "react";
import { InputField, ProfileForm } from "../forms";
import { Modal } from "./lib";
import { useProfile } from "../../hooks";
import { SubmitButton } from "../buttons";

export const ProfileDetailsModal = ({
  handleIsOpen,
  showNotification,
  refreshDashboard,
}: {
  handleIsOpen: () => void;
  showNotification: () => void;
  refreshDashboard: () => void;
}) => {
  const { data: initialValues } = useProfile();

  return (
    <Modal modalTitle="Profile Details" onClose={handleIsOpen}>
      <ProfileForm
        close={handleIsOpen}
        showNotification={showNotification}
        refreshDashboard={refreshDashboard}>
        <>
          <InputField
            label="Real name"
            name="name"
            type="string"
            defaultValue={initialValues?.name}
          />
          <InputField
            label="Derby name"
            name="derbyName"
            type="select"
            defaultValue={initialValues?.derbyName}
          />
          <InputField
            label="Number"
            name="number"
            type="number"
            defaultValue={initialValues?.number}
            min={0}
          />
          <InputField
            label="League"
            name="league"
            type="string"
            defaultValue={initialValues?.league}
            placeholder="Enter city or team"
          />
          <SubmitButton label="Save" intent="primary" />
        </>
      </ProfileForm>
    </Modal>
  );
};
