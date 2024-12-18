import React from "react";
import { InputField, SubmitButton } from "./lib";

export const RegisterForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <p className="text-lg font-bold">Register</p>
      <div className="space-y-2">
        <InputField label="Email" name="email" type="string" required />
        <InputField label="Password" name="password" type="password" required />
      </div>
      <SubmitButton label="Submit" />
      <div className="text-center">
        Or, if you already have and account, <br />{" "}
        <a
          className="cursor-pointer underline"
          onClick={() => setIsRegister(false)}>
          Log in
        </a>
      </div>
    </div>
  );
};
