import { authorise } from "./authorise";
import { AuthenticationResult } from "./types";


export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AuthenticationResult> => {
  let success;
  let error;

  await fetch("http://localhost:8081/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      const { success: authorisationSuccess, error: authorisationError } =
        await authorise();

      success = authorisationSuccess;
      error = authorisationError;
    } else {
      const { error: authenticationError } = await res.json();
      error = authenticationError;
    }
  });

  return { success, error };
};
