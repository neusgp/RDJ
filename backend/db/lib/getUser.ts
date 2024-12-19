import { User, UserValidation } from "../models";
import bcrypt from "bcrypt";

export const getUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  UserValidation.parse({ email, password });

  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("User doesn't exist");

  const {id, password: retrievedPassword} = user;

  const isValid = id && bcrypt.compareSync(retrievedPassword, password);

  return isValid ? id : new Error('Password is invalid');
};
