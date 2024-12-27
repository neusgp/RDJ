import React, { useState } from "react";
import { ProfileDetailsModal } from "../modals";

export const ProfileDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* todo: here goes a person icon */}
      <p className="cursor-pointer" onClick={() => handleIsOpen()}>
        Profile
      </p>
      {isOpen && <ProfileDetailsModal handleIsOpen={handleIsOpen} />}
    </>
  );
};
