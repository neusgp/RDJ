import { User, UserValidation } from "../models";

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //validation
  UserValidation.safeParse({ email, password });

  //make sure username is unique
  if (!!User.findOne({ where: { email } }))
    throw new Error("email is already in use");

  //insert to db
  await User.create({ email, password });

  const newUser = await User.findOne({ where: { email, password } });

  return newUser

  //return user id
};
