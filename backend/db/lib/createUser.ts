import { User, UserValidation } from "../models";

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //validation
  //FIX
  UserValidation.safeParse({ email, password });

  //make sure username is unique
  const existentUser = await User.findOne({ where: { email } });
  if (!!existentUser) throw new Error("email is already in use");

  //insert to db
  //TO-DO: HASH PASWORD
  await User.create({ email, password });
  const newUser = await User.findOne({ where: { email, password } });
  if (!newUser) throw new Error("Failed to store new user");

   //return user id
  return newUser.dataValues.id;

};
