import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, SeasonGoalsCard, Settings } from "../components";
import { useDashboard } from "../hooks";
import { isError } from "../@types";
import { authorise } from "../api";

const Welcome = ({ derbyName }: { derbyName?: string }) => (
  <p className="font-bold text-[38px] text-slate-600">
    Welcome
    {derbyName ? ` back, ${derbyName}!` : "!"}
  </p>
);

export const Dashboard = () => {
  const [isDashboardUpdate, setIsDashboardUpdate] = useState<boolean>(true);

  const refreshDashboard = useCallback(() => setIsDashboardUpdate(true), []);

  const handleRefreshDashboard = () => {
    setIsDashboardUpdate(false);
  };

  useEffect(() => {
    authorise()
      .then((result) => {
        if (isError(result))
          return (window.location.href = "http://localhost:3000/"); //out -> this will be the /login
      })
      .catch();
  }, []);

  const { data, loading } = useDashboard({
    isDashboardUpdate,
    handleRefreshDashboard,
  });

  const { goals } = data || {};
  const { profile } = data || {};
  const { derbyName } = profile || {};

  return (
    <div className="h-screen p-6">
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className="flex justify-between">
            <Welcome derbyName={derbyName} />
            <Settings refreshDashboard={refreshDashboard} />
          </div>
          <SeasonGoalsCard goals={goals} />
          <Card />
          <Card />
          <Card />
        </>
      )}
    </div>
  );
};
