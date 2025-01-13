import { useState, useEffect } from "react";
import { DashboardProps, ProfileProps } from "../@types";

export const useProfile = () => {
  const [data, setData] = useState<ProfileProps>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    fetch("http://localhost:8081/get-profile", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch();
  }, []);

  return { loading, data };
};
