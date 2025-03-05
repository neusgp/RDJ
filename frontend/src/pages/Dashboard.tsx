import React from "react";
import {
  Card,
  CreateMenu,
  LogOut,
  ProfileDetails,
  SeasonGoalsCard,
} from "../components";
import { useDashboard } from "../hooks";

export const Dashboard = () => {
  const { data, loading } = useDashboard();

  const { profile, goals } = data || {};
  const { derbyName } = profile || {};

  return (
    <div className="h-screen p-6">
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="font-bold text-[38px] text-slate-600">
              Welcome
              {derbyName ? ` back, ${derbyName}!` : "!"}
            </p>
            <div className="flex gap-10">
              <LogOut />
              <ProfileDetails />
              <CreateMenu />
            </div>
          </div>
          <SeasonGoalsCard goals={goals} />
          <div className="space-y-2">
            <Card />
            <Card />
            <Card />
          </div>
        </>
      )}
    </div>
  );
};
