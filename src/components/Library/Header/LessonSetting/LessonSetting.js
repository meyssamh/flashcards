import React from 'react';
import {
    IconButton, Button, Dialog, DialogContent, DialogContentText,
    DialogActions, DialogTitle, withMobileDialog
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const lessonSetting = (props) => (
    <Dialog
        open={props.openLSetting}
        onClose={props.closeLSetting}
    >
        <DialogActions>
            <IconButton onClick={props.closeLSetting}>
                <ClearIcon />
            </IconButton>
        </DialogActions>
        <DialogTitle>Lesson Setting</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Here you can add new lessons.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.addLesson} variant={'outlined'}>Add Lesson</Button>
        </DialogActions>
    </Dialog>
);

export default withMobileDialog()(lessonSetting);