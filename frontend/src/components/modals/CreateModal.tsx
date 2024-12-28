import React from "react";
import { CreateType, CreateTypes } from "../menus";
import { CreateBoutReminderModal } from "./CreateBoutReminderModal";

export const CreateModal = ({
  createType,
  handleIsOpen,
}: {
  createType: CreateType;
  handleIsOpen: () => void;
}) => {
  return (
    <>
      {createType ? (
        <>
          {createType === CreateTypes.note && (
            <CreateBoutReminderModal handleIsOpen={handleIsOpen} />
          )}
          {createType === CreateTypes.bout && (
            <CreateBoutReminderModal handleIsOpen={handleIsOpen} />
          )}
          {createType === CreateTypes.goal && (
            <CreateBoutReminderModal handleIsOpen={handleIsOpen} />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
