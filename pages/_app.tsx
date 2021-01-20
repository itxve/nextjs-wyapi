import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps, AppContext } from 'next/app';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Login from '@/pages/login';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#6a1b9a',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff7961',
            main: '#ab47bc',
            dark: '#ba000d',
            contrastText: '#000'
        }
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    const comp = Function.prototype.toString.call(Component);
    //是否登陆
    const [state, setstate] = useState(true);
    useEffect(() => {
        if (comp.indexOf('Custom404') !== -1) {
            //是 Custom404页面
            setstate(true);
        } else {
            if (!localStorage.getItem('token')) {
                setstate(false);
            }
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {!state ? <Login /> : <Component {...pageProps} />}
        </ThemeProvider>
    );
}
export default MyApp;
