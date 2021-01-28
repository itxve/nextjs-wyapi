import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Weather from '@/components/Weather';
import { AppBar, Avatar, Toolbar, Typography, Button, IconButton, Grid } from '@material-ui/core';
import type { Db } from '@/types/Itxve';
import TransitionsModal from '@/components/TransitionsModal';
import TransitionDilog from '@/components/TransitionDilog';
import config from '@/config';
import UserBind from './UserBind';
const { PROXYAPI, USERINFO } = config;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary
        },
        title: {
            flexGrow: 1
        }
    })
);

function Main(): JSX.Element {
    const classes = useStyles();
    const [user, setUser] = useState<Db.Xuser>(undefined);
    useEffect(() => {
        if (localStorage?.getItem(USERINFO)) {
            setUser(JSON.parse(localStorage.getItem(USERINFO) || '{}'));
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
                        退出
                    </Button>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} style={{ marginTop: '64px' }}>
                <Grid item xs={12} md={6} style={{ border: '1px solid black', width: 'calc(50%)' }}>
                    {user && (
                        <Avatar
                            alt="Remy Sharp"
                            sizes=""
                            src={`${PROXYAPI}/${encodeURIComponent(user?.avatar_url || '')}`}
                        />
                    )}
                    <div>
                        <TransitionsModal disableBackdropClick container={<span>用户绑定</span>}>
                            <UserBind />
                        </TransitionsModal>

                        <TransitionDilog openNode={<span>cccc</span>} title="搜索">
                            opopop
                        </TransitionDilog>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ border: '1px solid black', width: 'calc(50% )' }}
                >
                    <Weather />
                </Grid>
            </Grid>
        </div>
    );
}
export default Main;
