import React from 'react';
import {
    Dialog, DialogContent, DialogActions, DialogTitle, Button
} from '@material-ui/core';

const deleteCard = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>Delete Card</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this card? You won't be able to revert this!
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedDelete} color={'secondary'}>
                    Yes
                </Button>
                <Button onClick={props.close}>No</Button>
            </DialogActions>
        </Dialog>
    );
}

export default deleteCard;