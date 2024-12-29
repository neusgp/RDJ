import { Profile, ProfileValidation, PublicProfile } from "../models";

export const saveProfile = async ({
  profile,
}: {
  profile: PublicProfile;
}): Promise<void> => {
  ProfileValidation.parse(profile);

  const { id, userId, ...props } = profile;

  const existentProfile = await Profile.findOne({ where: { id } });

  if (!!existentProfile) {
    const { id: existentId } = existentProfile;
    if (!existentId) throw new Error("db profile row has no id");

    await Profile.update({ ...props }, { where: { id: existentId } });
  } else {
    await Profile.create({ ...props, userId });
  }
};
