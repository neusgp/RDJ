import React from "react";
import { CreateType, CreateTypes } from "../menus";
import { CreateBoutReminderModal } from "./CreateBoutReminderModal";
import { CreateSeasonGoalModal } from "./CreateSeasonGoalModal";

export const CreateModal = ({
  createType,
  handleModalClose,
  refreshDashboard,
}: {
  createType: CreateType;
  handleModalClose: () => void;
  refreshDashboard: () => void;
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
            <CreateSeasonGoalModal
              onClose={handleModalClose}
              refreshDashboard={refreshDashboard}
            />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};
