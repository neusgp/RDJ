import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton, ValidationHint } from "./lib";
import { NavLink } from "react-router-dom";

export const LoginForm = ({
  setIsRegister,
}: {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [submitError, setSubmitError] = useState<string | undefined>();

  const [success, setSuccess] = useState<boolean>(false);

  //todo: see if we can repeat less code-> extract and reuse functions, etc.
  const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    //for now
    fetch("http://localhost:8081/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          fetch("http://localhost:8081/protected", {
            method: "GET",
            headers: { "Content-type": "application/json" },
            credentials: "include",
          });
        }, 2000);
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col justify-center gap-6">
        <p className="text-lg font-bold">Log in</p>
        <div className="space-y-2">
          <InputField
            label="Email"
            type="string"
            required
            handleValue={handleEmailValue}
          />
          <InputField
            label="Password"
            type="password"
            required
            handleValue={handlePasswordValue}
          />
        </div>
        <ValidationHint hint={submitError} />
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
        {/* temporary */}
        {success && (
          <p className="font-bold text-green-500">
            User is successfully loged in!
          </p>
        )}
      </div>
    </form>
  );
};
