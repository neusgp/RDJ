import React from "react";
import { LogOut } from "./LogOut";
import { ProfileDetails } from "./ProfileDetails";
import { CreateMenu } from "../menus";

const SettingsComponent = ({
  refreshDashboard,
}: {
  refreshDashboard: () => void;
}) => {
  return (
    <div className="flex gap-10">
      <LogOut />
      <ProfileDetails refreshDashboard={refreshDashboard} />
      <CreateMenu refreshDashboard={refreshDashboard} />
    </div>
  );
};

export const Settings = React.memo(SettingsComponent);
