import React, { useState } from "react";
import { CreateMenuOptions } from "./CreateMenuOptions";
import { CreateModal } from "../modals";
import { CreateType } from "./lib";
import { ActionButton } from "../buttons";

export const CreateMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createType, setCreateType] = useState<CreateType | undefined>();

  const handleActionButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleModalClose = () => {
    setCreateType(undefined);
  };

  const handleCreate = (createType: CreateType | undefined) => {
    setCreateType(createType);
  };

  return (
    <>
      <div className="space-y-4">
        <ActionButton
          handleOnClick={handleActionButtonClick}
          intent={isOpen ? "close" : "create"}
        />
        {isOpen && <CreateMenuOptions handleCreate={handleCreate} />}
      </div>
      {!!createType && (
        <CreateModal
          createType={createType}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};
