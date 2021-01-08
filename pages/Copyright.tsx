import React from 'react';
import { Link, Typography } from '@material-ui/core';

export default function Copyright() {
    return (
        <Typography color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://itxve.cn/">
                itxve.cn
            </Link>
            {new Date().getFullYear()}.
        </Typography>
    );
}
