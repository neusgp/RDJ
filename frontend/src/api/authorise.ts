import { AuthorisationResult } from "./types";


export const authorise = async (): Promise<AuthorisationResult> => {
  let success;
  let error;

  await fetch("http://localhost:8081/authorise", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      //window.location.href = "http://localhost:3000/dashboard";
      success = true;

    } else {
      const { error: authorisationError } = await res.json();
      error = authorisationError;
    }
  });

  return { success , error };
};
