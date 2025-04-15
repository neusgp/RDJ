import React, { JSX, useState } from "react";
import { getFormValues } from "./lib";
import { ProfileFormValidation } from "../../validation";
import { z } from "zod";
import { useAppContext } from "../../hooks/useAppContext";

type RegisterFormProps = z.infer<typeof ProfileFormValidation>;

export const ProfileForm = ({
  children,
  close,
  showNotification,
}: {
  children: JSX.Element;
  close: () => void;
  showNotification: () => void;
}) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  //todo: add regex validation and set submit errors
  const [submitError, setSubmitError] = useState<string | undefined>();

  const { refreshDashboard } = useAppContext();

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
        refreshDashboard();
        close();
        showNotification();
      } else {
        const { error } = await res.json();
        setSubmitError(error);
      }
    });
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col justify-center gap-4">{children}</div>
    </form>
  );
};
