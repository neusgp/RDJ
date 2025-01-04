import { Request, Response } from "express";

export const authorise = (req: Request, res: Response) => {
  const { user } = req.session || {};
  if (!user) res.status(401).json({ error: "Access not authorised" });

  res.json({ user });
};
