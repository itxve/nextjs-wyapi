import React, { useEffect, useState } from 'react';
import { GitHub } from '@material-ui/icons';
import { CircularProgress, Button } from '@material-ui/core';

import config from '../../config';
const { github } = config;

export default function Login(): JSX.Element {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const url = window.location.href;
        const newUrl = url.split('?code=');
        if (localStorage.getItem('github') === newUrl[1]) return;
        localStorage.setItem('github', newUrl[1]);
        window.history.replaceState({}, '', newUrl[0]);
        if (newUrl[1]) {
            setLoading(true);
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
                    localStorage.setItem('token', JSON.stringify(data));
                    if (data?.login) {
                        location.href = '/';
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    return (
        <>
            <GitHub
                style={{ cursor: 'pointer', margin: '16px' }}
                onClick={() => {
                    location.href = github.AUTHORIZE;
                }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                    if (!loading) {
                    }
                }}
                startIcon={loading && <CircularProgress color="inherit" size={24} />}
            >
                Login
            </Button>
        </>
    );
}
