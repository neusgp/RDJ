import React, { useEffect, useState } from "react";
import {
  Card,
  CreateMenu,
  LogOut,
  ProfileDetails,
  SeasonGoalsCard,
} from "../components";
import { useDashboard } from "../hooks";
import { isError } from "../@types";
import { authorise } from "../api";
import { update, updateWith } from "lodash";

const Settings = ({ refreshDashboard }: { refreshDashboard: () => void }) => {
  return (
    <div className="flex gap-10">
      <LogOut />
      <ProfileDetails refreshDashboard={refreshDashboard} />
      <CreateMenu />
    </div>
  );
};

export const Dashboard = () => {
  const [isDashboardUpdate, setIsDashboardUpdate] = useState<boolean>(true);

  const refreshDashboard = () => {
    console.log("triggered");
    setIsDashboardUpdate(true);
  };

  const stopDashboardRefresh = () => {
    setIsDashboardUpdate(false);
  };

  const { data, loading } = useDashboard({
    isDashboardUpdate,
    stopDashboardRefresh,
  });

  const { profile } = data || {};
  const { derbyName } = profile || {};

  useEffect(() => {
    authorise()
      .then((result) => {
        if (isError(result))
          return (window.location.href = "http://localhost:3000/"); //out -> this will be the /login
      })
      .catch();
  }, []);

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
            <Settings refreshDashboard={refreshDashboard} />
          </div>
          {/* <SeasonGoalsCard goals={goals} /> */}
          <Card />
          <Card />
          <Card />
        </>
      )}
    </div>
  );
};
