import React from "react";
import { CreateType, CreateTypes } from "../menus";
import { CreateBoutReminderModal } from "./CreateBoutReminderModal";
import { CreateSeasonGoalModal } from "./CreateSeasonGoalModal";

export const CreateModal = ({
  createType,
  handleModalClose,
}: {
  createType: CreateType;
  handleModalClose: () => void;
}) => {
  return (
    <>
      {createType ? (
        <>
          {createType === CreateTypes.note && (
            <CreateBoutReminderModal onClose={handleModalClose} />
          )}
          {createType === CreateTypes.bout && (
            <CreateBoutReminderModal onClose={handleModalClose} />
          )}
          {createType === CreateTypes.goal && (
            <CreateSeasonGoalModal onClose={handleModalClose} />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
