import { useEffect, useState } from "react";
import { GoalsFormProps } from "../components/forms/SeasonGoalsForm";

//this is no longer a generic function, it initializes the form values. so it shoudl be renamed.
export const useGoals = ({
  setInitialValues,
}: {
  setInitialValues: (data: GoalsFormProps | undefined) => void;
}) => {
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    fetch("http://localhost:8081/get-goals", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setInitialValues(data);
        setLoading(false);
      })
      .catch();
  }, []);

  return { loading };
};
