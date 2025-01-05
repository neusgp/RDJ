import React, { ChangeEvent } from "react";

type InputType = "string" | "number" | "password";

export const InputField = ({
  label,
  type,
  defaultValue,
  min,
  required = false,
  placeholder,
  handleValue,
}: {
  label?: string;
  type: InputType;
  defaultValue?: string;
  min?: number;
  required?: boolean;
  placeholder?: string;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        className="w-[100%] border p-1"
        type={type}
        defaultValue={defaultValue}
        min={min}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleValue(e)}></input>
    </div>
  );
};
