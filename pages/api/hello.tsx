import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    try {
        fetch('https://avatars0.githubusercontent.com/u/33005087?v=4', {
            // responseType: 'arraybuffer'
        })
            .then((e) => e.arrayBuffer())
            .then((e) => {
                var buf = new Buffer(e.byteLength);
                var view = new Uint8Array(e);
                for (var i = 0; i < buf.length; ++i) {
                    buf[i] = view[i];
                }
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(buf);
            });
    } catch (error) {
        res.send(error);
    }
};
