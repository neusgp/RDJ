import dotenv from "dotenv";
import Pool from "pg";

dotenv.config();
const { HOST, DB_USER, DB_NAME, PASSWORD, PORT } = process.env;

export const db = new Pool({
  host: HOST,
  user: DB_USER,
  database: DB_NAME,
  password: PASSWORD,
  port: PORT,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 10000,
  max: 10,
  ssl: {
    connectionUnauthorized: false,
  },
});
