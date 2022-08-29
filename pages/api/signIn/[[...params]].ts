import type { NextApiRequest, NextApiResponse } from 'next';
import * as pool from '../../../src/utils/dbConnection';
import console from 'console';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { params } = req.body as any;
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('select * from admin where username = ? and password = ? and active = 1', [
            params.username,
            params.password
        ]);

        res.status(200).json(JSON.stringify(rows));
    } catch (err) {
        console.log(err);
    } finally {
        if (conn) conn.end(); // close connection
    }
};