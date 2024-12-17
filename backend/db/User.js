import { sequelize } from "./config.js";
import { DataTypes } from "sequelize";

const { STRING } = DataTypes;

export const User = sequelize.define("user", {
  email: { type: STRING, unique: true },
  password: { type: STRING },
});
