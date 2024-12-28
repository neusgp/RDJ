import React from "react";
import { CreateBoutReminderModal } from "./CreateBoutReminder";

type CreateType = "note" | "bout" | "goal";

enum CreateTypes {
  note = "note",
  bout = "bout",
  goal = "goal",
}

export const CreateModal = ({
  createType,
  handleIsOpen,
}: {
  createType: CreateType;
  handleIsOpen: () => void;
}) => {
  switch (createType) {
    case CreateTypes.note:
      return <CreateBoutReminderModal handleIsOpen={handleIsOpen} />;
    case CreateTypes.bout:
      return <CreateBoutReminderModal handleIsOpen={handleIsOpen} />;
    case CreateTypes.goal:
      return <CreateBoutReminderModal handleIsOpen={handleIsOpen} />;
  }
};

const createOptions = [
  {
    name: "Season Goal",
    createType: CreateTypes.goal,
  },
  { name: "Journal Entry" },
  { name: "Note", createType: CreateTypes.note },
  { name: "Bout Reminder", createType: CreateTypes.bout },
];

export const CreateMenuOptions = ({
  handleCreate,
}: {
  handleCreate: (createType: CreateType | undefined) => void;
}) => {
  return (
    <>
      <div className="border border-slate-100 shadow-md rounded-lg flex flex-col absolute w-[220px] right-8 px-8 py-4 gap-3 bg-white">
        {createOptions.map(({ name, createType }) => {
          return (
            <p
              key={name}
              className="cursor-pointer"
              onClick={() => {
                handleCreate(createType);
              }}>
              {name}
            </p>
          );
        })}
      </div>
    </>
  );
};
