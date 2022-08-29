import type { NextApiRequest, NextApiResponse } from "next";
import * as pool from "../../../src/utils/dbConnection";
import console from "console";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, firstname, lastname } = req.body as any;
  let conn;
  try {
    conn = await pool.getConnection();
    conn.query(
      `INSERT INTO Users(email, password, firstname, lastname) VALUES(?, ?, ?, ?)`,
      [email, password, firstname, lastname]
    );

    res.status(201);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) conn.end(); // close connection
  }
};
