import React, { useState } from "react";
import { CreateMenuOptions } from "./CreateMenuOptions";
import { CreateModal } from "../modals";
import { ActionButton } from "../buttons";
import { useCreateModal } from "../../hooks";

export const CreateMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { handleModalClose, handleCreate, createType } = useCreateModal();

  const handleActionButtonClick = () => {
    setIsOpen(!isOpen);
  };

  //create modal should be in the dashboard
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
