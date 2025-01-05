import { getProfile } from "./getProfile";

export const getDashboard = async ({ id }: { id: string }) => {
  const { derbyName } = (await getProfile({ id })) || {};

  return { profile: { derbyName } };
};
