import React from "react";
import { QuickCreateButton } from "../buttons";

export const Card = () => {
  return (
    <div className="border border-slate-100 shadow-md h-[200px] rounded-lg">
      <QuickCreateButton
        item="Journal Entry"
        onClick={() => console.log("hi")}
      />
    </div>
  );
};
