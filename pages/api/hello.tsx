import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
if (req) {
  throw new Error("呃呃呃呃");
}
  res.status(200).json({ name: 'John Doe' })
}
