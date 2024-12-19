import React, { ChangeEvent } from "react";

type InputType = "string" | "number" | "password";

export const InputField = ({
  label,
  type,
  required = false,
  placeholder,
  handleValue,
}: {
  label?: string;
  type: InputType;
  required: boolean;
  placeholder?: string;
  handleValue: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        className="w-[100%] border"
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleValue(e)}></input>
    </div>
  );
};
