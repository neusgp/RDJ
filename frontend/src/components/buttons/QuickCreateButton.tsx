import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const QuickCreateButton = ({
  item,
  onClick,
}: {
  item: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="text-slate-400 flex  justify-center items-center gap-2"
      type="submit"
      onClick={() => onClick()}>
      <FontAwesomeIcon icon={faPlusCircle} />
      Create {item}
    </button>
  );
};
