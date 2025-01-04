import { AuthorisationResult } from "./types";

//this needs to be refactored. It's not necessary to have both success and error.
export const authorise = async (): Promise<AuthorisationResult> => {
  let success;
  let error;

  await fetch("http://localhost:8081/authorise", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      success = true;
    } else {
      const { error: authorisationError } = await res.json();
      error = authorisationError;
    }
  });

  return { success, error };
};
