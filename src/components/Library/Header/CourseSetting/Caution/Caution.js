import React from 'react';
import {
    Dialog, DialogContent, DialogContentText, DialogActions,
    DialogTitle, Button
} from '@material-ui/core';

const caution = (props) => {
    return (
        <Dialog
        open={props.openCaution}
        onClose={props.closeCaution}
        >
            <DialogTitle>Are you Sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You won't be able to revert this and all your lessons in this course will be deleted!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedYes} color={'secondary'}>Yes</Button>
                <Button onClick={props.closeCaution}>No</Button>
            </DialogActions>
        </Dialog>
    );
}

export default caution;