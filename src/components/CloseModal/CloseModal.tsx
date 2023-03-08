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
    handleConfirm: () => void;
    title?: string;
    message?: string;
    actionText?: string;
};
const CloseModal = ({ open, handleClose, handleConfirm, message, actionText, title }: CloseModalProps) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title || 'Log Out'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message ||
                        'Are you sure you want to log out of your account? Your session will end and you will need to log in again to access your account.'}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} variant="contained" color="error">
                    {actionText || 'Logout'}
                </Button>
                <Button onClick={handleClose} variant="contained" color="success" autoFocus>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CloseModal;
