import { AuthenticationResult, AuthorisationResult, isError } from "../@types";
import { authorise } from "./authorise";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AuthenticationResult> => {
  await fetch("http://localhost:8081/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      const result = await authorise<AuthorisationResult>();

      if (isError(result)) return { error: result.error };

      return { success: result.success };
    } else {
      const { error } = await res.json();
      return { error };
    }
  });

  return { error: "Unknown error" };
};
