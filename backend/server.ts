import express, { Request, Response} from "express";
import cors from "cors";
import { createUser, sequelize as db} from "./db";

const app = express();

app.use(cors());

app.use(express.json());

//User Authentication
app.post("/register", (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const newUser = createUser({ email, password });
    console.log("new user:", newUser);
    res.send("successs!!!!!");

    //redirect to dashboard
  } catch (err) {
    console.log("error creating user", err);
    res.send(`impossible to create user`);
  }
});

//login
//app.post("/login", (req, res) => {});
//register

//logout
//app.post("/logout", (req, res) => {});

db.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
