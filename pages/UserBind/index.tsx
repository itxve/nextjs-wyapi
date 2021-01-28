import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';

export default function UserBind() {
    return (
        <Paper>
            <form noValidate autoComplete="off">
                <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
                <TextField
                    id="filled-secondary"
                    label="Filled secondary"
                    variant="filled"
                    color="secondary"
                />
                <TextField
                    id="outlined-secondary"
                    label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                />
            </form>
        </Paper>
    );
}
