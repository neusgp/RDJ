import { PublicUser, User, UserValidation } from "../models";
import bcrypt from "bcrypt";

export const authenticateUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<PublicUser | Error> => {
  UserValidation.parse({ email, password });

  const user = await User.findOne({ where: { email } });
  console.log("user", user);
  if (!user) throw new Error("User doesn't exist");

  const { id, password: retrievedPassword, email: retrievedEmail } = user;
  if (!id) throw new Error("User doesn't exist: id is missing");

  const isValid = bcrypt.compareSync(password, retrievedPassword);

  if (!isValid) throw new Error("Password is invalid");

  const publicUser = { id, email: retrievedEmail };
  return publicUser;
};
