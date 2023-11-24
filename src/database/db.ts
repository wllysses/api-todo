import { Client } from "pg";
import dotEnv from "dotenv";

dotEnv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client.connect((err: Error) => {
  if (err) {
    console.log("Database connection fail: " + err.message);
    return;
  }

  console.log("Database connection successful.");
});

export { client };
