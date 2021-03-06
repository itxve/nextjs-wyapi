import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {
        query: { resId }
    } = req;
    const isHp = String(resId).substr(0, 4) === 'http';
    fetch(`${isHp ? resId : 'https://api.itxve.cn/api/hello'}`)
        .then((e) => {
            return Promise.resolve({
                body: e.arrayBuffer(),
                type: e.headers.get('content-type')
            });
        })
        .then(({ body, type }) => {
            body.then((data) => {
                res.writeHead(200, { 'Content-Type': type || '' });
                res.end(Buffer.from(data));
            });
        })
        .catch((error) => {
            res.send(error);
        });
}
