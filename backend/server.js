import express from "express";
import cors from "cors";
import { sequelize } from "./db/index.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  // await User.create({ email: "neusgarcia@hotmaiil.com", password: "123" });
  return res.json("hi from backend side");
});

//User Authentication

//login
app.post("/login", (req, res) => {});
//register
app.post("/register", (req, res) => {});
//logout
app.post("/logout", (req, res) => {});

//protected
app.get("/protected", (req, res) => {});

//TODO: TO REPLACE BY REAL CODE
// app.get("/derby_name", (req, res) => {
//   db.query("SELECT * FROM profiles", (err, data) => {
//     if (err) {
//       console.log("error", err);
//       return res.status(500).json({ error: err });
//     } else {
//       console.log("result:", data.rows);
//       return res.json(data.rows);
//     }
//   });
// });
sequelize.sync().then((req) => {
  app.listen(8081, () => {
    console.log("listening on port 8081");
  });
});
