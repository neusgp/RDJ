import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const { HOST_LOCAL, DB_USER_LOCAL, DB_NAME_LOCAL, PASSWORD_LOCAL, PORT } = process.env;

//to-do: connect to local db while developing!!
export const sequelize = new Sequelize(DB_NAME_LOCAL, DB_USER_LOCAL, PASSWORD_LOCAL, {
  host: HOST_LOCAL,
  port: PORT,
  dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     connectionUnauthorized: false,  
  //   },
  // },
});
