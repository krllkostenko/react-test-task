import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

interface popUpProps {
    name: string,
    email: string,
}

const PopUp = (props: popUpProps) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button data-popup-handler variant="outlined" color="primary" onClick={handleClickOpen}>
                Show More Info
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"User Info"}</DialogTitle>
                <DialogContent>
                    <div>
                        <p>User Nickname: {props.name}</p>
                        <p>User Email: {props.email}</p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button data-popup-handler onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default PopUp;