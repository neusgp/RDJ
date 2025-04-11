import { useEffect, useState } from "react";

//this is no longer a generic function, it initializes the form values. so it shoudl be renamed.
export const useGoals = ({
  setInitialValues,
}: {
  setInitialValues: (data: GoalsFormProps | undefined) => void;
}) => {
  useEffect(() => {
    fetch("http://localhost:8081/get-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setInitialValues(data);
      })
      .catch();
  }, []);
};
