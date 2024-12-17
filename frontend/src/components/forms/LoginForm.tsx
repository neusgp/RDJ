import React from "react";
import { InputField, SubmitButton } from "./lib";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <h2>Log in</h2>
      <div className="space-y-2">
        <InputField label="Email" name="email" type="string" required />
        <InputField label="Password" name="password" type="password" required />
      </div>
      <SubmitButton label="Submit" />
      <div className="text-center">
        Or, if you don't have and account, <br /> <a>Register</a>
      </div>
    </div>
  );
};
