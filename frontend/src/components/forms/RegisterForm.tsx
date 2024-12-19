import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton, ValidationHint } from "./lib";
import { z } from "zod";
import {
  EmailValidation,
  PasswordValidation,
  RegisterFormValidation,
} from "../../validation";

export type RegisterFormProps = z.infer<typeof RegisterFormValidation>;

export const RegisterForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [submitError, setSubmitError] = useState<string | undefined>();

  //todo: see if we can repeat less code
  const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { error } = EmailValidation.safeParse({ email });
    setEmailError(error?.format().email?._errors.join(","));
    setEmail(e.target.value);
  };

  const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { error } = PasswordValidation.safeParse({ password });
    setPasswordError(error?.format().password?._errors.join(","));
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = RegisterFormValidation.safeParse({ email, password });
    if (!!error)
      return setSubmitError("The credentials are not valid. Try again");

    //for now
    fetch("http://localhost:8081/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      if (res.ok) {
        //display link to login
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  //const isDisabled = !!emailError || !!passwordError;

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col justify-center gap-6">
          <p className="text-lg font-bold">Register</p>
          <div className="space-y-2">
            <InputField
              label="Email"
              type="string"
              required
              handleValue={handleEmailValue}
            />
            <ValidationHint hint={emailError} />
            <InputField
              label="Password"
              type="password"
              required
              handleValue={handlePasswordValue}
            />
            <ValidationHint hint={passwordError} />
          </div>
          <ValidationHint hint={submitError} />
          <SubmitButton label="Submit" isDisabled={false} />
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
      <p></p>
    </>
  );
};
