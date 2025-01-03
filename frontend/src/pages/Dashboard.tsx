import React, { JSX } from "react";
import { Card, CreateMenu, LogOut, ProfileDetails } from "../components";

export const Dashboard = () => {
  return (
    <div className="h-screen p-6">
      <div className="flex justify-between h-[200px]">
        <p className="font-bold text-[38px] text-slate-600">
          Welcome back, Fiera!
        </p>
        <div className="flex gap-10">
          <LogOut />
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
