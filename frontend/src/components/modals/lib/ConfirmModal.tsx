import React, { JSX } from "react";
import { SubmitButton } from "../../forms";

export const ConfirmModal = ({
  children,
  onConfirm,
  handleIsOpen,
}: {
  children: JSX.Element;
  onConfirm: () => void;
  handleIsOpen?: () => void;
}) => (
  <>
    <div
      className="left-0 top-0 bg-black opacity-40 absolute z-10 h-screen w-[100%]"
      onClick={() => handleIsOpen && handleIsOpen()}></div>
    <div className="absolute w-[40%] h-min-content bg-white z-20 right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] rounded-lg flex flex-col items-center py-4 px-6 gap-8">
      {children}
      <div className="flex gap-4">
        <SubmitButton label="Log out" intent="primary" onClick={onConfirm} />
        <SubmitButton label="Cancel" intent="delete" onClick={handleIsOpen} />
      </div>
    </div>
  </>
);
