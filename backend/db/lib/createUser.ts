import { User, UserValidation } from "../models";
import bcrypt from "bcrypt";

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> => {
  UserValidation.parse({ email, password });

  const existentUser = await User.findOne({ where: { email } });
  if (!!existentUser) throw new Error("Email is already in use");

  const hashedPassword = bcrypt.hashSync(password, 10);

  await User.create({ email, password: hashedPassword });
};
