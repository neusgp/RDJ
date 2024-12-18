import express, { Request, Response } from "express";
import cors from "cors";
import { createUser, sequelize as db } from "./db";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok");
});

//User Authentication

//register
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    await createUser({ email, password });
    res.status(200).json({success: true})
  } catch (err) {
    console.error(err)
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
  res.end();
});

//login
//app.post("/login", (req, res) => {});

//logout
//app.post("/logout", (req, res) => {});

db.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
