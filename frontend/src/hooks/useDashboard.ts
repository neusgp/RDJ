import { useState, useEffect } from "react";
import { DashboardProps, GoalsProps, ProfileProps } from "../@types";
import { isEqual } from "lodash";

export const useDashboard = ({
  isDashboardUpdate,
  handleRefreshDashboard,
}: {
  isDashboardUpdate: boolean;
  handleRefreshDashboard: () => void;
}) => {
  const [profile, setProfile] = useState<Pick<ProfileProps, "derbyName">>({
    derbyName: "",
  });
  const [goals, setGoals] = useState<GoalsProps>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (isDashboardUpdate) console.log("refreshing!");
    fetch("http://localhost:8081/get-dashboard", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data: DashboardProps) => {
        //refactor this
        const { profile: storedProfile, goals: storedGoals } = data;
        if (isEqual(profile, data.profile) && isEqual(goals, data.goals)) {
          return;
        } else {
          if (!isEqual(storedProfile, profile)) {
            setProfile(storedProfile);
          }
          if (!isEqual(storedGoals, goals)) {
            setGoals(storedGoals);
          }
          handleRefreshDashboard();
        }
      })
      .catch();
  }, [isDashboardUpdate]);

  return { loading, profile, goals };
};
