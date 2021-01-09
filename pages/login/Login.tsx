import React, { useEffect } from 'react';
import { GitHub } from '@material-ui/icons';
import config from '../../config';
const { github } = config;

export default function Login(): JSX.Element {
    useEffect(() => {
        const url = window.location.href;
        const newUrl = url.split('?code=');
        if (localStorage.getItem('github') === newUrl[1]) return;
        localStorage.setItem('github', newUrl[1]);
        window.history.replaceState({}, '', newUrl[0]);
        if (newUrl) {
            const requestData = {
                client_id: 'd9fa9dd33e73f65a0a61',
                code: newUrl[1]
            };
            fetch(github.GETACCESSTOKEN, {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data?.login) {
                        location.href = '/main';
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                });
        }
    }, []);

    return <GitHub />;
}
