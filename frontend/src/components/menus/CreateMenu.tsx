import React, { useState } from "react";
import { CreateMenuOptions } from "./CreateMenuOptions";

export const CreateMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <p className="w-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <CreateMenuOptions />}
    </div>
  );
};
