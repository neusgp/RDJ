import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DeleteButton = ({
  handleDelete,
  rowIndex,
}: {
  handleDelete: (rowIndex: number) => void;
  rowIndex: number;
}) => (
  <button
    type="button"
    className="p-2 border border-[#B8B6D5] rounded-lg"
    onClick={() => handleDelete(rowIndex)}>
    <FontAwesomeIcon icon={faTrashAlt} className="p-[1px]" />
  </button>
);
