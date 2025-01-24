import express from "express";

import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import {
  createUser,
  sequelize as db,
  authenticateUser,
  getDashboard,
  getProfile,
  saveProfile,
  getGoals,
  saveGoal,
  GoalEntry,
  cleanGoalRecords,
} from "./db";
import { authorise } from "./lib";
import { getUserId } from "./helpers";

const { SECRET_JWT } = process.env;

const app = express();

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000", // To replace with the real URL!
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  const token = req.cookies.access_token;
  let data = null;

  req.session = { user: null };

  try {
    data = jwt.verify(token, SECRET_JWT);
    req.session.user = data;
  } catch {}

  next();
});

app.get("/", (req, res) => {
  const { user } = req.session || {};
  res.status(200).json({ user });
});

//User Authentication

//register
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    await createUser({ email, password });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authenticateUser({
      email,
      password,
    });

    const token = jwt.sign({ userEmail: user.email, id: user.id }, SECRET_JWT, {
      expiresIn: "1h",
    });
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
        //secure: process.env.NODE_ENV === "production",
      })
      .json({ id: user.id, token });
  } catch (err) {
    console.error(err);
    res.status(401).json({
      error: "Login failed. Make sure you enter the right credentials.",
    });
  }
});

//authorise
app.get("/authorise", (req, res) => {
  authorise(req, res);
});

//logout
app.post("/logout", (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
  }
});

//save-profile
app.post("/save-profile", async (req, res) => {
  const { name, derbyName, number, league } = req.body;

  try {
    await saveProfile({
      name,
      derbyName,
      number,
      league,
      userId: getUserId(req),
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

app.post("/save-goals", async (req, res) => {
  const goals: GoalEntry[] = req.body;

  try {
    await cleanGoalRecords({ goals, userId: getUserId(req) });

    goals.forEach(async (goal: GoalEntry) => {
      await saveGoal({ userId: getUserId(req), ...goal });
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

//get-dashboard
app.post("/get-dashboard", async (req, res) => {
  try {
    const data = await getDashboard({ id: getUserId(req) });
    res.json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

//get-profile
app.post("/get-profile", async (req, res) => {
  try {
    const data = await getProfile({ id: getUserId(req) });
    res.json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

app.post("/get-goals", async (req, res) => {
  try {
    const data = await getGoals({ id: getUserId(req) });
    res.json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

db.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
