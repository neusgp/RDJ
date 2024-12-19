import React from "react";

export const ValidationHint = ({ hint }: { hint?: string }) => {
  return <p className="text-sm text-red-300">{hint}</p>;
};
