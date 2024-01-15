import * as mysql from "mysql2/promise";
import "dotenv/config";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } from "../configPorts";

// @ts-ignore
export const connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
})

