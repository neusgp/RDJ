import React, { JSX } from "react";

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
    <div className="absolute w-[40%] h-min-content bg-white z-20 right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] rounded-lg flex flex-col py-4 px-6 gap-8">
      <div className="flex justify-between">
        <p className="font-bold">{modalTitle}</p>
        {/* todo: thsi should be an icon */}
        {!!onClose && (
          <p className="cursor-pointer" onClick={() => onClose()}>
            x
          </p>
        )}
      </div>
      {children}
    </div>
  </>
);
