import React from "react";
import { InputField, SubmitButton } from "./lib";
import { NavLink } from "react-router-dom";

//todo: contact us functionality
export const RecoveryForm = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="text-lg font-bold">
        You will receive a reset link on your email inbox
      </p>
      <div className="space-y-2 w-[60%]">
        {/* <InputField label="Email" type="string" required /> */}
      </div>
      {/* <SubmitButton label="Send link" /> */}
      <p className="text-slate-400 text-center text-sm w-[60%]">
        You haven't received anything? Make sure you entered your email
        correctly. <br />
        If the problem persists, contact us.
      </p>
      <NavLink to="/" className="cursor-pointer underline">
        Back to Log in page
      </NavLink>
    </div>
  );
};
