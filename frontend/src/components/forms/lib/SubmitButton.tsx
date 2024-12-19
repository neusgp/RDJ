import React from "react";
import { RegisterFormProps } from "../RegisterForm";

export const SubmitButton = ({
  label,
  isDisabled = true,
}: {
  label: string;
  isDisabled: boolean;
}) => {
  return (
    <button
      className="bg-blue-400 py-2 w-28 self-center"
      type="submit"
      disabled={isDisabled}>
      {label}
    </button>
  );
};
