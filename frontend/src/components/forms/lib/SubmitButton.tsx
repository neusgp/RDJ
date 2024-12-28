import React from "react";

type ButtonColor = "submit" | "cancel" | "save";

export const SubmitButton = ({
  label,
  intent,
  isDisabled,
  onClick,
}: {
  label: string;
  intent: ButtonColor;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  const getButtonColor = (intent: ButtonColor): string => {
    switch (intent) {
      case "save":
        return "bg-blue-300 text-blue-800";
      case "cancel":
        return "bg-red-300 text-red-800";
      case "submit":
        return "bg-green-300 text-green-800";
    }
  };

  return (
    <button
      className={`${getButtonColor(
        intent
      )} py-2 px-4 self-center rounded text-red-900 text-sm`}
      type="submit"
      disabled={isDisabled}
      onClick={() => onClick && onClick()}>
      {label}
    </button>
  );
};
