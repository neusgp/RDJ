import React, { useState } from "react";
import { getFormValues, InputField, SubmitButton } from "./lib";
import { ProfileFormValidation } from "../../validation";
import { useProfile } from "../../hooks";
import { z } from "zod";

type RegisterFormProps = z.infer<typeof ProfileFormValidation>;

export const ProfileForm = () => {
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();

  const { data: initialValues } = useProfile();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, derbyName, number, league } =
      getFormValues<RegisterFormProps>(e);

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
        window.location.reload();
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
        name="name"
        type="string"
        defaultValue={initialValues?.name}
      />
      <InputField
        label="Derby name"
        name="derbyName"
        type="string"
        defaultValue={initialValues?.derbyName}
      />
      <InputField
        label="Number"
        name="number"
        type="number"
        defaultValue={initialValues?.number}
        min={0}
      />
      <InputField
        label="League"
        name="league"
        type="string"
        defaultValue={initialValues?.league}
        placeholder="Enter city or team"
      />
      <SubmitButton label="Save" intent="save" />
    </form>
  );
};
