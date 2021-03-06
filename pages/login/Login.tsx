import React, { useEffect, useState } from 'react';
import { GitHub } from '@material-ui/icons';
import { CircularProgress, Button, Grid } from '@material-ui/core';
import config from '@/config';
import { add } from 'ts-snow';

const { github, USERINFO } = config;
console.log('assss', add(1, 3));

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
                .then((res) => {
                    const data = {
                        auth: {
                            type: 'github',
                            thid: '12392323',
                            login: res.login,
                            name: res.name
                        }
                    };
                    return fetch('http://localhost:3000/api/user?type=rg', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'content-type': 'application/json'
                        }
                    });
                })
                .then((response) => response.json())
                .then((res) => {
                    if (res) {
                        localStorage.setItem(USERINFO, JSON.stringify(res));
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
        <Grid container direction="column" alignContent="center">
            <Grid item style={{ margin: 'auto' }}>
                <GitHub
                    style={{ cursor: 'pointer', margin: '4px' }}
                    onClick={() => {
                        location.href = github.AUTHORIZE;
                    }}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
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
            </Grid>
        </Grid>
    );
}
