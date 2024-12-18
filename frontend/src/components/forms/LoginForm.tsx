import React from "react";
import { InputField, SubmitButton } from "./lib";
import { Link, NavLink } from "react-router-dom";

export const LoginForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <h2>Log in</h2>
      <div className="space-y-2">
        <InputField label="Email" name="email" type="string" required />
        <InputField label="Password" name="password" type="password" required />
      </div>
      <SubmitButton label="Submit" />
      <div className="text-center space-y-2">
        <NavLink
          to="/recovery"
          className="text-slate-400 cursor-pointer underline">
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
