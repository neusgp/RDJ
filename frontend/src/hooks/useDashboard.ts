import { useState, useEffect } from "react";
import { DashboardProps } from "../@types";
import { authorise } from "../api";

export const useDashboard = () => {
  const [data, setData] = useState<DashboardProps>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    //the question remains: should the redirect be done in the server? Or should the server be user as an API layer only?
    //if I do this separately, there will be 2 api requests
    authorise()
      .then(({ success }) => {
        if (!success) return (window.location.href = "http://localhost:3000/"); //out -> this will be the /login
      })
      .catch();

    fetch("http://localhost:8081/get-dashboard", {
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
