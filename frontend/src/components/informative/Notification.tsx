import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const NONE = "hidden";

export const Notification = ({
  children,
  removeNotification,
}: {
  children: React.ReactNode;
  removeNotification: () => void;
}) => {
  const portalRoot = document.getElementById("portal-root");

  useEffect(() => {
    setTimeout(() => {
      removeNotification();
    }, 6000);
  });

  if (!portalRoot) return <></>;

  return ReactDom.createPortal(
    <div
      className={`absolute w-[200px] right-[-200px] top-2 rounded-l-md flex justify-center content-center text-center bg-black text-white text-sm bold p-4 notification`}>
      {children}
    </div>,
    portalRoot
  );
};
