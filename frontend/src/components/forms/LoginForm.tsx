import React from "react";
import { InputField, SubmitButton } from "./lib";
import { NavLink } from "react-router-dom";

export const LoginForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-lg font-bold">Log in</p>
      <div className="space-y-2">
        <InputField label="Email" name="email" type="string" required />
        <InputField label="Password" name="password" type="password" required />
      </div>
      <SubmitButton label="Submit" />
      <div className="flex flex-col text-center gap-2">
        <NavLink
          to="/recovery"
          className="text-slate-400 text-sm cursor-pointer underline">
          I forgot my password
        </NavLink>
        <p>
          Or, if you don't have and account, <br />{" "}
          <a
            className="cursor-pointer underline"
            onClick={() => setIsRegister(true)}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
