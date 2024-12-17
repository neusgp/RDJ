import express , { Request, Response, Express } from "express";
import cors from "cors";
import { sequelize as db, User } from "./db";

const app: Express = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
});

//User Authentication

//login
app.post("/login", (req, res) => {});
//register
app.post("/register", (req, res) => {
  const { email, password } = req.body;
});
//logout
app.post("/logout", (req, res) => {});

//protected
app.get("/protected", (req, res) => {});

db.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
