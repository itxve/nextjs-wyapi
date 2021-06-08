import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import type { Container } from '@/types/Itxve';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    })
);

export default function TransitionsModal(props: {
    children?: Container;
    container?: React.ReactNode;
    beforOnOpen?: () => void;
    beforOnClose?: () => void;
    afterOnClose?: () => void;
    disableBackdropClick?: boolean;
}) {
    const {
        children,
        container,
        beforOnClose,
        beforOnOpen,
        afterOnClose,
        disableBackdropClick = false
    } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    beforOnOpen?.();
                    handleOpen();
                }}
            >
                {container}
            </span>
            <Modal
                className={classes.modal}
                open={open}
                onClose={() => {
                    beforOnClose?.();
                    handleClose();
                    afterOnClose?.();
                }}
                disableBackdropClick={disableBackdropClick}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div>{children}</div>
                </Fade>
            </Modal>
        </div>
    );
}
