import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// TODO we need to use context and lazy loading for modals
type CloseModalProps = {
    open: boolean;
    handleClose: () => void;
};
const CloseModal = ({ open, handleClose }: CloseModalProps) => {
    const handleClosePage = () => {
        handleClose();
        // TODO handle logout logic ?
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{'Log Out'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to log out of your account? Your session will end and you will need to log in
                    again to access your account.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClosePage} variant="contained" color="error">
                    Logout
                </Button>
                <Button onClick={handleClose} variant="contained" color="success" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CloseModal;
