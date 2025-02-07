import React, { ChangeEvent } from "react";

type InputType = "string" | "number" | "password";

export const InputField = ({
  label,
  name,
  type,
  defaultValue,
  rowIndex,
  min,
  required = false,
  placeholder,
  handleValue,
}: {
  type: InputType;
  name: string;
  label?: string;
  defaultValue?: string;
  rowIndex?: number;
  min?: number;
  required?: boolean;
  placeholder?: string;
  handleValue?: (
    e: ChangeEvent<HTMLInputElement>,
    edited: number | undefined
  ) => void;
}) => {
  return (
    <div className="w-[100%]">
      {label && <p>{label}</p>}
      <input
        className="w-[100%] border p-1"
        type={type}
        name={name}
        autoComplete="off"
        defaultValue={defaultValue}
        min={min}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleValue && handleValue(e, rowIndex)}></input>
    </div>
  );
};
