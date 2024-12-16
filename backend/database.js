require("dotenv").config();
const { CONNECTION_STRING } = process.env;

const { Pool } = require("pg");

const db = new Pool({
  connectionString: CONNECTION_STRING,
  ssl: {
    connectionUnauthorized: false,
  },
});

db.connect();

exports.db = db;
