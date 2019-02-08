import React from 'react';
import {
    Button, Dialog, DialogContent, DialogContentText,
    DialogActions, DialogTitle, withMobileDialog
} from '@material-ui/core';

const lessonSetting = (props) => (
    <Dialog
        open={props.openLSetting}
        onClose={props.closeLSetting}
    >
        <DialogTitle>Lesson Setting</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Here you can add new lessons.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.addLesson}>Add Lesson</Button>
        </DialogActions>
    </Dialog>
);

export default withMobileDialog()(lessonSetting);