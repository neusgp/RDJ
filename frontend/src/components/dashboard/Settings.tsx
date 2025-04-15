import React from "react";
import { LogOut } from "./LogOut";
import { ProfileDetails } from "./ProfileDetails";
import { CreateMenu } from "../menus";

const SettingsComponent = () => {
  return (
    <div className="flex gap-10">
      <LogOut />
      <ProfileDetails />
      <CreateMenu />
    </div>
  );
};

export const Settings = React.memo(SettingsComponent);
