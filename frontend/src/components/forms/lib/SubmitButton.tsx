import React from "react";

export const SubmitButton = ({ label }: { label: string }) => {
  return (
    <button className="bg-blue-400 py-2 w-28 self-center" type="submit">
      {label}
    </button>
  );
};
