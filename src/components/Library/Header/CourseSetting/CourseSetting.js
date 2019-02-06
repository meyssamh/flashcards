import React from 'react';
import {
    IconButton, Button, Dialog, DialogContent, DialogContentText,
    DialogActions, DialogTitle, withMobileDialog
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const courseSetting = (props) => (
    <Dialog
        open={props.openCSetting}
        onClose={props.closeCSetting}
    >
        <DialogActions>
            <IconButton onClick={props.closeCSetting}>
                <ClearIcon />
            </IconButton>
        </DialogActions>
        <DialogTitle>Course Setting</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Here you can add new courses or remove your old courses.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.addCourse} variant={'outlined'}>Add Course</Button>
            <Button onClick={props.deleteCourse} variant={'outlined'} color={'secondary'}
                disabled={props.disabled}
            >Delete Course</Button>
        </DialogActions>
    </Dialog>
);

export default withMobileDialog()(courseSetting);