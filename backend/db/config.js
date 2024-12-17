import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const { HOST, DB_USER, DB_NAME, PASSWORD, PORT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      connectionUnauthorized: false,
    },
  },
});
