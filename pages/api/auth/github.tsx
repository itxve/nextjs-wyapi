import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    const {
        client_id,
        client_secret = `8427db54442d761eef30c6ec6c1508c23b8018d5`,
        code
    } = req.body;

    const data = {
        client_id,
        client_secret,
        code
    };
    // Request to exchange code for an access token
    fetch(`https://github.com/login/oauth/access_token`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then((res) => res.json())
        .then((res) => {
            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${res.access_token}`
                }
            });
        })
        .then((res) => res.json())
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(500).json(error);
        });
};
