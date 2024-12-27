import React, { JSX, JSXElementConstructor, ReactNode, useState } from "react";
import { Card, CreateMenu, InputField, SubmitButton } from "../components";

export const Modal = ({
  modalTitle,
  children,
  isClose,
  handleIsOpen,
}: {
  modalTitle: string;
  children: JSX.Element;
  isClose?: boolean;
  handleIsOpen?: () => void;
}) => (
  <>
    <div
      className="left-0 top-0 bg-black opacity-40 absolute z-10 h-screen w-[100%]"
      onClick={() => handleIsOpen && handleIsOpen()}></div>
    <div className="absolute w-[40%] h-min-content bg-white z-20 right-[50%] top-[50%] translate-y-[-50%] translate-x-[50%] rounded-lg flex flex-col py-4 px-6 gap-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold">{modalTitle}</p>
        {/* todo: thsi should be an icon */}
        {isClose && (
          <p
            className="cursor-pointer"
            onClick={() => handleIsOpen && handleIsOpen()}>
            x
          </p>
        )}
      </div>
      {children}
    </div>
  </>
);

export const ProfileDetailsModal = ({
  handleIsOpen,
}: {
  handleIsOpen: () => void;
}) => {
  return (
    <Modal modalTitle="Profile Details" isClose handleIsOpen={handleIsOpen}>
      <form className="flex flex-col justify-center gap-6">
        <InputField label="Real name" type="string" />
        <InputField label="Derby name" type="string" />
        <InputField label="Number" type="number" min={0} />
        <InputField
          label="Leage"
          type="string"
          placeholder="Enter city or team"
        />
        <SubmitButton label="Save" />
      </form>
    </Modal>
  );
};

export const ProfileDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <p className="cursor-pointer" onClick={() => handleIsOpen()}>
        Profile
      </p>
      {isOpen && <ProfileDetailsModal handleIsOpen={handleIsOpen} />}
    </>
  );
};

export const Dashboard = () => {
  return (
    <div className="h-screen p-6">
      <div className="flex justify-between h-[200px]">
        <p className="font-bold text-[38px] text-slate-600">
          Welcome back, Fiera!
        </p>
        <div className="flex gap-10 text-[18px]">
          <p className="cursor-pointer">Log out</p>
          {/* todo: here goes a person icon */}
          <ProfileDetails />
          <CreateMenu />
        </div>
      </div>
      <div className="space-y-2">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
