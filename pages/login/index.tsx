import React from 'react';
import { Typography, Avatar, Link, TextField, CssBaseline, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TypedAni from '@/components/TypedAni';
import Login from './Login';
import { withTranslation } from '@/i18n';
import { TFunction } from 'next-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '60%',
        width: '85%',
        borderRadius: '80px'
    },
    image: {
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        // boxShadow:
        //     '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        // backgroundImage: 'url(/assets/jianc.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
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

function Index({ t }: { readonly t: TFunction }) {
    const classes = useStyles();
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundImage: 'url(https://api.72.rs/images/api.php)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    className={classes.image}
                    style={{ backgroundColor: 'rgba(253,253,253,.85)' }}
                >
                    <TypedAni />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    style={{ backgroundColor: 'rgba(253,253,253,.85)' }}
                    elevation={6}
                    square
                >
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} src="/assets/wangyi.png"></Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                style={{ backgroundColor: 'rgba(253,253,253,.85)' }}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ backgroundColor: 'rgba(253,253,253,.85)' }}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Login />

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        {t('name1')}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {t('register')}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

Index.getInitialProps = async () => ({
    namespacesRequired: []
});
export default withTranslation()(Index);
