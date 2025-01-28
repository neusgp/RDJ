export const authorise = async <
  AuthorisationResult
>(): Promise<AuthorisationResult> => {
  await fetch("http://localhost:8081/authorise", {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      return { success: true };
    } else {
      const { error } = await res.json();
      return { error };
    }
  });
  return { error: "Unknown error" } as AuthorisationResult;
};
