import React, { useState } from "react";
import { CreateMenuOptions, CreateModal } from "./CreateMenuOptions";

type CreateType = "note" | "bout" | "goal";

export const CreateMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createType, setCreateType] = useState<CreateType | undefined>();

  const handleIsOpen = () => {
    setCreateType(undefined);
  };

  const handleCreate = (createType: CreateType | undefined) => {
    setCreateType(createType);
  };

  return (
    <>
      <div className="space-y-4">
        <p className="w-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </p>
        {isOpen && <CreateMenuOptions handleCreate={handleCreate} />}
      </div>
      {!!createType && (
        <CreateModal createType={createType} handleIsOpen={handleIsOpen} />
      )}
    </>
  );
};
