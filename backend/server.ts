import express from "express";
import cors from "cors";
import { createUser, sequelize as db, authenticateUser } from "./db";

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
    res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later" });
  }
  res.end();
});

//login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const id = await authenticateUser({ email, password });
    res.status(200).json({ success: true, id });
    
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        error:
          "Something went wrong. Make sure you enter the right credentials",
      });
  }
  res.end();
});


//logout
//app.post("/logout", (req, res) => {});

db.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
