import React from "react";
import { CreateType, CreateTypes } from "../menus";
import { CreateBoutReminderModal } from "./CreateBoutReminderModal";
import { CreateSeasonGoalModal } from "./CreateSeasonGoalModal";

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
            <CreateSeasonGoalModal handleIsOpen={handleIsOpen} />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
