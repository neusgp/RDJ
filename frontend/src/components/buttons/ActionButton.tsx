import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faHomeAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ActionButtonIntent = "home" | "create" | "close" | "save";

const getActionButtonIcon = (intent: ActionButtonIntent) => {
  switch (intent) {
    case "create":
      return faPlus;
    case "close":
      return faMinus;
    case "save":
      return faSave;
    case "home":
      return faHomeAlt;
  }
};

const getActionButtonColor = ({
  isDisabled,
  intent,
}: {
  isDisabled?: boolean;
  intent: ActionButtonIntent;
}) => {
  if (!!isDisabled) return "bg-slate-300";
  if (intent === "save") return "bg-cyan-400";
  return "bg-purple-500";
};

export const ActionButton = ({
  handleOnClick,
  intent,
  isDisabled,
}: {
  handleOnClick: () => void;
  intent: ActionButtonIntent;
  isDisabled?: boolean;
}) => {
  return (
    <button
      className={`${getActionButtonColor({
        isDisabled,
        intent,
      })} w-10 h-10 flex justify-center items-center text-lg text-white rounded-[1000px]`}
      onClick={() => handleOnClick()}>
      <FontAwesomeIcon icon={getActionButtonIcon(intent)} />
    </button>
  );
};
