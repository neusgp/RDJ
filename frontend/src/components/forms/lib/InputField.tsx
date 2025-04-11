import React, { ChangeEvent } from "react";

type InputType = "string" | "number" | "password" | "select";

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
    <div className="w-[100%] flex flex-col gap-2">
      {label && <p className="text-sm font-semibold text-slate-500">{label}</p>}
      <input
        className="w-[100%] border border-[#B8B6D5] py-2 px-3 rounded-lg"
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
