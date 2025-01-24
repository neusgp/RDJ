import React, { useState } from "react";
import { getFormValues, InputField, SubmitButton, ValidationHint } from "./lib";
import { z } from "zod";
import { RegisterFormValidation } from "../../validation";

type RegisterFormProps = z.infer<typeof RegisterFormValidation>;

export const RegisterForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [submitError, setSubmitError] = useState<string | undefined>();
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = getFormValues<RegisterFormProps>(e);

    const { error } = RegisterFormValidation.safeParse({ email, password });
    if (!!error)
      //fix this code!
      return setSubmitError(
        `${error?.format().email?._errors.join(",")}, ${error
          ?.format()
          .password?._errors.join(",")}`
      );

    //for now
    fetch("http://localhost:8081/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      if (res.ok) {
        setSuccess(true);
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <>
      {success ? (
        <div className="flex flex-col justify-center text-center">
          <p className="font-bold text-green-500">
            Perfect, you are now registered!
          </p>
          <br />
          <p
            className="underline cursor-pointer"
            onClick={() => window.location.reload()}>
            Log in to see your new dashboard.
          </p>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg font-bold">Register</p>
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
            <SubmitButton label="Register" intent="save" />
            <div className="text-center">
              Or, if you already have and account, <br />
              <a
                className="cursor-pointer underline"
                onClick={() => setIsRegister(false)}>
                Log in
              </a>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
