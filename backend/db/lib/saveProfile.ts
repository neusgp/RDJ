import { Profile, ProfileProps, ProfileValidation } from "../models";

// const getPropsTpUpdate = (props: ProfileProps) => {
//   const toDrop = Object.entries(props).filter(([key, value]) => !value);

//   console.log("to DROP!!", toDrop);
// };

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

  if (!!existentProfile) {
    const { id: existentId } = existentProfile;
    if (!existentId) throw new Error("db profile row has no id");

    const props = { name, derbyName, number, league };

    //const toDrop = getPropsTpUpdate({ ...props, userId });

    await Profile.update(
      { name, derbyName, number, league },
      { where: { id: existentId } }
    );
  } else {
    await Profile.create({ name, derbyName, number, league, userId });
  }
};
