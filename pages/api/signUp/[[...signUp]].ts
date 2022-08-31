import type { NextApiRequest, NextApiResponse } from "next";
import * as pool from "../../../src/utils/dbConnection";
import console from "console";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstname, lastname, email, password } = req.query as any;
  let conn;
  try {
    conn = await pool.getConnection();
    conn.query(
      `INSERT INTO Users(first_name, last_name, email, password) VALUES(?, ?, ?, ?)`,
      [firstname, lastname, email, password]
    );

    res.status(201);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.end(); // close connection
  }
};
