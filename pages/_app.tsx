import '../styles/globals.css';
import type { AppProps /* , AppContext */ } from 'next/app';

import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto'
                }
            }
        }
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Component {...pageProps} />
            </CssBaseline>
        </ThemeProvider>
    );
}
export default MyApp;
