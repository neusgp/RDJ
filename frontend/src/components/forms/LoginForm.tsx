import React from "react";
import { InputField, SubmitButton } from "./lib";

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
        <p className="text-slate-400 underline">I forgot my password</p>
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
