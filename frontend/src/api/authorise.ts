import { Success, Error } from "../@types";
let authoriseResult: Success | Error;

export const authorise = async (): Promise<Success | Error> => {
  await fetch("http://localhost:8081/authorise", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      authoriseResult = { success: true };
    } else {
      const { error } = await res.json();
      authoriseResult = { error };
    }
  });
  return authoriseResult;
};
