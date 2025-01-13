import { useEffect, useState } from "react";
import { GoalsProps } from "../@types";

export const useProfile = () => {
  const [data, setData] = useState<GoalsProps>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    fetch("http://localhost:8081/get-goals", {
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
