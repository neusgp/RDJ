export const logout = async (): Promise<void> => {
  await fetch("http://localhost:8081/logout", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) window.location.href = "http://localhost:3000/";
  });
};
