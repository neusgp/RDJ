import { Request } from "express";

export const getUserId = (req: Request): Id => {
  return req.session?.user.id.toString();
};
