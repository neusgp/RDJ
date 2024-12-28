import React from "react";

import { createMenuOptions, CreateType } from "./lib";

export const CreateMenuOptions = ({
  handleCreate,
}: {
  handleCreate: (createType: CreateType | undefined) => void;
}) => {
  return (
    <>
      <div className="border border-slate-100 shadow-md rounded-lg flex flex-col absolute w-[220px] right-8 px-8 py-4 gap-3 bg-white">
        {createMenuOptions.map(({ name, createType }) => {
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
