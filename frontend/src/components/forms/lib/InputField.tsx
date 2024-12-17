import React from "react";

type InputType = "string" | "number" | "password";

export const InputField = ({
  label,
  name,
  type,
  required = false,
  placeholder,
}: {
  label?: string;
  name: string;
  type: InputType;
  required: boolean;
  placeholder?: string;
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        className="w-[100%]"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}></input>
    </div>
  );
};
