import { Xuser, query, insert } from '@/db/xuser';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        //查
        const [rows] = await query([]);
        const users = rows as Xuser[];
        res.send(users);
    } else {
        const [rows] = await insert(req.body);
        res.send(rows);
    }
}
