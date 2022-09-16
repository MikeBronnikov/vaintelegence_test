import mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config();

export const mySQLLoader = () => {
  const DBconnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  });

  DBconnection.connect();
  return DBconnection;
};
