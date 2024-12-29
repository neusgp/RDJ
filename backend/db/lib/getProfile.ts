import { Profile, PublicProfile } from "../models";

export const getProfile = async ({
  id,
}: {
  id: string;
}): Promise<PublicProfile | undefined> => {
  const profile = await Profile.findOne({ where: { userId: id } });

  if (!profile) return;

  const { id: profileId, name, derbyName, number, league, userId } = profile;

  if (!profileId) throw new Error("bd profile row has no id");

  const publicProfile = {
    name,
    derbyName,
    number,
    league,
    userId,
    id: profileId,
  };

  return publicProfile;
};
