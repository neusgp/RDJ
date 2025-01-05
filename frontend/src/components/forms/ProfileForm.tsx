import React, { ChangeEvent, useState } from "react";
import { InputField, SubmitButton } from "./lib";
import { ProfileFormValidation } from "../../validation";
import { useProfile } from "../../hooks";

export const ProfileForm = () => {
  const [name, setName] = useState<string>();
  const [derbyName, setDerbyName] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [league, setLeague] = useState<string>();
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();

  const { data: initialValues } = useProfile();

  const handleNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDerbyNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDerbyName(e.target.value);
  };

  const handleNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleLeagueValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLeague(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { error } = ProfileFormValidation.safeParse({
      name,
      derbyName,
      number,
      league,
    });

    if (!!error)
      return setSubmitError(
        "Some information's format is not valid. Try again."
      );

    //for now
    fetch("http://localhost:8081/save-profile", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, derbyName, number, league }),
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        //
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <form
      className="flex flex-col justify-center gap-6"
      onSubmit={(e) => handleSubmit(e)}>
      <InputField
        label="Real name"
        type="string"
        defaultValue={initialValues?.name}
        handleValue={handleNameValue}
      />
      <InputField
        label="Derby name"
        type="string"
        defaultValue={initialValues?.derbyName}
        handleValue={handleDerbyNameValue}
      />
      <InputField
        label="Number"
        type="number"
        defaultValue={initialValues?.number}
        min={0}
        handleValue={handleNumberValue}
      />
      <InputField
        label="League"
        type="string"
        defaultValue={initialValues?.league}
        placeholder="Enter city or team"
        handleValue={handleLeagueValue}
      />
      <SubmitButton label="Save" intent="save" />
    </form>
  );
};
