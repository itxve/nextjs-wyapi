import type { NextApiRequest, NextApiResponse } from 'next';
import github from './github';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    github(req, res);
};
