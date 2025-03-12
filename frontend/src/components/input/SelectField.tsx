import React from "react";
const mockOptions = [
  "Bout",
  "Training",
  "Bootcamp",
  "Skill",
  "Rule",
  "Scrimmage",
];

export const SelectField = ({
  label,
  options = mockOptions,
}: {
  label?: string;
  options: string[];
}) => {
  return (
    <div className="w-[100%] flex flex-col gap-2">
      {label && <p className="text-sm font-semibold text-slate-500">{label}</p>}
      <select
        aria-placeholder="select a type"
        className="w-[100%] border border-[#B8B6D5] py-2 px-3 rounded-lg">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
