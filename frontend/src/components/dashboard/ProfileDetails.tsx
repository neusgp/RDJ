import React, { useState } from "react";
import { ProfileDetailsModal } from "../modals";
import { Notification } from "../informative/Notification";

export const ProfileDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  const handleShowNotification = () => {
    setIsProfileUpdated(true);
  };

  return (
    <>
      <p className="cursor-pointer" onClick={() => handleIsOpen()}>
        Profile
      </p>
      {isOpen && (
        <ProfileDetailsModal
          handleIsOpen={handleIsOpen}
          showNotification={handleShowNotification}
        />
      )}
      {isProfileUpdated && (
        <Notification removeNotification={() => setIsProfileUpdated(false)}>
          Successfully updated profile details
        </Notification>
      )}
    </>
  );
};
