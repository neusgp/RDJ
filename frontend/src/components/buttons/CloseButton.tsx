import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button className="text-slate-500">
    <FontAwesomeIcon icon={faClose} onClick={onClose} />
  </button>
);
