export const authorise = async <
  AuthorisationResult
>(): Promise<AuthorisationResult> => {
  let result = {};
  await fetch("http://localhost:8081/authorise", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      result = { success: true };
    } else {
      const { error } = await res.json();
      result = { error };
    }
  });
  return result as AuthorisationResult;
};
