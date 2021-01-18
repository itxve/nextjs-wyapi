import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Card, AppBar, Avatar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import type { User } from '@/types/Modal/User';
import config from '@/config/index';

const { PROXYAPI } = config;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
);

export default function Main() {
    const classes = useStyles();
    const [user, setUser] = useState<User>(undefined);
    useEffect(() => {
        if (localStorage?.getItem('token')) {
            setUser(JSON.parse(localStorage.getItem('token') || '{}'));
        }
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button
                        onClick={() => {
                            localStorage.removeItem('token');
                            location.href = '/login';
                        }}
                        color="inherit"
                    >
                        Login Out
                    </Button>
                </Toolbar>
            </AppBar>

            {user && (
                <Avatar
                    style={{ marginTop: '100px' }}
                    alt="Remy Sharp"
                    src={`${PROXYAPI}/${encodeURI(user?.avatar_url || '')}`}
                />
            )}
            <Card>{JSON.stringify(user)}</Card>
        </div>
    );
}
