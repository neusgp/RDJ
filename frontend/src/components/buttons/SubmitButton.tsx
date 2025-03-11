import React from "react";

type ButtonIntent = "primary" | "secondary" | "delete";

export const SubmitButton = ({
  label,
  intent,
  isDisabled,
  onClick,
}: {
  label: string;
  intent: ButtonIntent;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  const getButtonStyle = (intent: ButtonIntent): string => {
    switch (intent) {
      case "secondary":
        return "bg-cyan-400";
      case "delete":
        return "bg-red-500";
      case "primary":
        return "bg-purple-500";
    }
  };

  return (
    <button
      className={`${getButtonStyle(
        intent
      )} py-3 px-8 self-center rounded-[100px] font-semibold  text-white `}
      type="submit"
      disabled={isDisabled}
      onClick={() => onClick && onClick()}>
      {label}
    </button>
  );
};
