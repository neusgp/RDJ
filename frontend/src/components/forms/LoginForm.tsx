import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton, ValidationHint } from "./lib";
import { NavLink } from "react-router-dom";
import { login } from "../../api";
import { RegisterFormValidation } from "../../validation";
import { z } from "zod";

type LoginProps = z.infer<typeof RegisterFormValidation>;

const getLoginFormValues = (
  e: React.FormEvent<HTMLFormElement>
): LoginProps => {
  const formData = new FormData(e.currentTarget);

  let formValues = {};
  for (let [key, value] of formData.entries()) {
    formValues = { ...formValues, [key]: value };
  }
  return formValues as LoginProps;
};

export const LoginForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    const { email, password } = getLoginFormValues(e);

    const { success, error } = await login({ email, password });

    if (!!success) {
      setSuccess(success);
      //todo: this is going to be a separate function
      setTimeout(() => {
        window.location.href = "http://localhost:3000/dashboard";
      }, 1500);
    } else if (!!error) setSubmitError(error);
  };

  return (
    <>
      {success ? (
        <p className="font-bold text-green-500">
          Login successful, preparing your dashboard...
        </p>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center gap-6">
          <p className="text-lg font-bold">Log in</p>
          <div className="space-y-2">
            <InputField label="Email" type="string" name="email" required />
            <InputField
              label="Password"
              type="password"
              name="password"
              required
            />
          </div>
          <ValidationHint hint={submitError} />
          <SubmitButton label="Log in" intent="save" />
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
        </form>
      )}
    </>
  );
};
