import { useState, useEffect } from "react";
import { DashboardProps } from "../@types";
import { isEqual } from "lodash";

export const useDashboard = ({
  isDashboardUpdate,
  handleRefreshDashboard,
}: {
  isDashboardUpdate: boolean;
  handleRefreshDashboard: () => void;
}) => {
  const [data, setData] = useState<DashboardProps>({
    profile: { derbyName: "" },
    goals: [],
  });
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (isDashboardUpdate) console.log("refreshing!");
    fetch("http://localhost:8081/get-dashboard", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((newData: DashboardProps) => {
        if (!isEqual(data, newData)) {
          console.log("different data");
          setData(newData);
          handleRefreshDashboard();
        }
      })
      .catch();
  }, [isDashboardUpdate]);

  return { loading, data };
};
