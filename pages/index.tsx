import React, { useEffect, useState } from 'react';
import { Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { GitHub } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import config from '../config';

const { github } = config;
console.log('githubgithubgithub', github);

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));
export default function Index() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src="/assets/wangyi.png" />
                <Typography component="h1" variant="h6">
                    登陆至网易云
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        id="email"
                        label="Email Address Or Phone"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Box>
                        <Button
                            variant="contained"
                            onClick={() => {
                                location.href = github.AUTHORIZE;
                            }}
                            color="primary"
                            disableElevation
                        >
                            <Login action="login" />
                        </Button>
                    </Box>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );

    function Login({ action }: any) {
        const [state, setstate] = useState(undefined);

        useEffect(() => {
            if (!state) {
                const url = window.location.href;
                const hasCode = url.includes('?code=');
                // If Github API returns the code parameter
                if (hasCode) {
                    const newUrl = url.split('?code=');
                    // window.history.pushState({}, null, newUrl[0]);
                    console.log('hasCode', newUrl);
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
                            setstate(data);
                        })
                        .catch((error) => {
                            console.log('error', error);
                        });
                }
            }
        }, []);

        return <GitHub />;
    }
}
