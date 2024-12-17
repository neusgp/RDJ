import express from "express";
import cors from "cors";
import db from "./database";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("hi from backend side");
});

//TODO: TO REPLACE BY REAL CODE
app.get("/derby_name", (req, res) => {
  db.query("SELECT * FROM profiles", (err, data) => {
    if (err) {
      console.log("error", err);
      return res.status(500).json({ error: err });
    } else {
      console.log("result:", data.rows);
      return res.json(data.rows);
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
