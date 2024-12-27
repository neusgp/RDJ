import React, { ChangeEvent } from "react";

type InputType = "string" | "number" | "password";

export const InputField = ({
  label,
  type,
  min,
  required = false,
  placeholder,
  handleValue,
}: {
  label?: string;
  type: InputType;
  min?: number;
  required?: boolean;
  placeholder?: string;
  handleValue?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        className="w-[100%] border p-1"
        type={type}
        min={min}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleValue && handleValue(e)}></input>
    </div>
  );
};
