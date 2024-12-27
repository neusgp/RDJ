import React, { useState } from "react";
import { LogOutModal } from "../modals";

export const LogOut = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <p className="cursor-pointer" onClick={() => handleIsOpen()}>
        Log out
      </p>
      {isOpen && <LogOutModal handleIsOpen={handleIsOpen} />}
    </>
  );
};
