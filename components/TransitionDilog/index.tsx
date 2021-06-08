import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import {
    Button,
    IconButton,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

import { Container } from '@/types/Itxve';

//标题组件样式
const TitleStyles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2)
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500]
        }
    });
interface DialogTitleProps extends WithStyles<typeof TitleStyles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}
//有样式的标题
const ItDialogTitle = withStyles(TitleStyles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <DialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose && (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            )}
        </DialogTitle>
    );
});
//内容区
const ItDialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(DialogContent);

//操作区
const ItDialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(DialogActions);

//自定义的通用Dailog
export default function CustomizedDialogs(props: {
    children?: Container;
    openNode?: React.ReactNode;
    title?: React.ReactNode;
    beforOnOpen?: () => Promise<void>;
    beforOnClose?: () => Promise<void>;
    afterOnClose?: () => Promise<void>;
    disableBackdropClick?: boolean;
}) {
    const {
        children,
        openNode,
        title,
        beforOnClose,
        beforOnOpen,
        afterOnClose,
        disableBackdropClick = false
    } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = async () => {
        await beforOnClose?.();
        setOpen(false);
        await afterOnClose?.();
    };

    return (
        <div>
            <span
                // variant="outlined"
                color="primary"
                onClick={() => {
                    handleClickOpen();
                    beforOnOpen?.();
                }}
            >
                {openNode}
            </span>
            <Dialog
                disableBackdropClick={disableBackdropClick}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <ItDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title || ''}
                </ItDialogTitle>
                <ItDialogContent dividers>{children}</ItDialogContent>
                <ItDialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                        确定
                    </Button>
                </ItDialogActions>
            </Dialog>
        </div>
    );
}
