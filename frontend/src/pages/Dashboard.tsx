import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, SeasonGoalsCard, Settings } from "../components";
import { useDashboard } from "../hooks";
import { DashboardProps, isError } from "../@types";
import { authorise } from "../api";
import { Welcome } from "../components/dashboard/Welcome";

export const Dashboard = () => {
  const [isDashboardUpdate, setIsDashboardUpdate] = useState<boolean>(true);

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

  const {
    profile,
    goals: stateGoals,
    loading,
  } = useDashboard({
    isDashboardUpdate,
    handleRefreshDashboard,
  });

  const { derbyName } = profile || {};
  const refreshDashboard = useCallback(() => setIsDashboardUpdate(true), []);
  const goals = useMemo(() => stateGoals, [stateGoals]);

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
