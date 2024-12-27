import React from "react";

type ButtonColor = "submit" | "cancel" | "save";

export const SubmitButton = ({
  label,
  intent,
  isDisabled,
}: {
  label: string;
  intent: ButtonColor;
  isDisabled?: boolean;
}) => {
  const getButtonColor = (intent: ButtonColor): string => {
    switch (intent) {
      case "save":
        return "bg-blue-300";
      case "cancel":
        return "bg-red-300";
      case "submit":
        return "bg-green-300";
    }
  };

  return (
    <button
      className={`${getButtonColor(intent)} py-2 w-28 self-center`}
      type="submit"
      disabled={isDisabled}>
      {label}
    </button>
  );
};
