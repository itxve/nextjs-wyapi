import { query, register } from '@/db/xuser';
import type { Db } from '@/types/Itxve';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const [rows] = await query([]);
        const users = rows as Db.Xuser[];
        res.send(users);
    } else if (req.method === 'POST') {
        const { type } = req.query;
        if (type === 'rg') {
            const { auth } = req.body;
            const ret = await register(auth);
            
            res.send(ret[0]);
        } else {
            res.send(99);
        }
    } else if (req.method === 'PUT') {
    } else if (req.method === 'DELETE') {
    } else {
        res.send('不支持的调用');
    }
}
