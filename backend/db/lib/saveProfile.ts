import { Profile, ProfileProps, ProfileValidation } from "../models";

export const saveProfile = async ({
  name,
  derbyName,
  number,
  league,
  userId,
}: ProfileProps): Promise<void> => {
  ProfileValidation.parse({
    name,
    derbyName,
    number,
    league,
    userId,
  });

  const existentProfile = await Profile.findOne({ where: { userId } });
  console.log("existis", existentProfile);

  if (!!existentProfile) {
    const { id: existentId } = existentProfile;
    if (!existentId) throw new Error("db profile row has no id");

    await Profile.update(
      { name, derbyName, number, league },
      { where: { id: existentId } }
    );
  } else {
    await Profile.create({ name, derbyName, number, league, userId });
  }
};
