import { getProfile } from "./getProfile";

export const getDashboard = async ({ id }: { id: string }) => {
  const profile = await getProfile({ id });

  return { profile: profile };
};
