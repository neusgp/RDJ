import { Success, Error } from "../@types";
import { authorise } from "./authorise";

let loginResult: Success | Error;

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Success | Error> => {
  await fetch("http://localhost:8081/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      loginResult = await authorise();
    } else {
      const { error } = await res.json();
      loginResult = { error };
    }
  });
  return loginResult;
};
