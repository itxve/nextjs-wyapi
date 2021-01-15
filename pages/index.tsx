import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Card } from '@material-ui/core';

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

export default function Main(props: any) {
    const classes = useStyles();
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        if (localStorage) {
            setUser(JSON.parse(localStorage.getItem('token') || ''));
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
            <Card>{JSON.stringify(user)}</Card>
        </div>
    );
}
