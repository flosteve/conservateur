import React from 'react';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const ModalFonds = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" className="modal">
            <DialogContent className="modal-container">
                <DialogTitle className="modal-title">
                    Test
                    <CloseIcon onClick={handleClose}/>
                </DialogTitle>
                <DialogContentText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolores.</DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default ModalFonds;
