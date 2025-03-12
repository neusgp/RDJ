import React, { JSX } from "react";
import { CloseButton } from "../../buttons";

export const Modal = ({
  children,
  modalTitle,
  onClose,
}: {
  children: JSX.Element;
  modalTitle?: string;
  onClose?: () => void;
}) => (
  <>
    <div
      className="left-0 top-0 bg-black opacity-40 absolute z-10 h-screen w-[100%]"
      onClick={() => onClose && onClose()}></div>
    <div className="absolute w-[660px] h-min-content bg-white z-20 right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] rounded-[30px] flex flex-col py-6 px-10 gap-8">
      <div className="flex justify-between">
        <p className="modal-title">{modalTitle}</p>
        {!!onClose && <CloseButton onClose={onClose} />}
      </div>
      {children}
    </div>
  </>
);
