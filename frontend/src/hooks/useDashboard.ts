import { useState, useEffect } from "react";
import { DashboardProps } from "../@types";
import { authorise } from "../api";

export const useDashboard = () => {
  const [data, setData] = useState<DashboardProps>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    //the question remains: should the redirect be done in the server? Or should the server be user as an API layer only?
    authorise().then(({ success }) => {
      if (!success) return (window.location.href = "http://localhost:3000/"); //out -> this will be the /login
    });

    fetch("http://localhost:3000/get-dashboard", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return { loading, data };
};
