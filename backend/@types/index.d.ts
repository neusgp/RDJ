import * as express from "express";

declare type Session = {
  user?: string | jwt.JwtPayload | null;
};

declare global {
  namespace Express {
    interface Request {
      session?: Session;
    }
  }
}
