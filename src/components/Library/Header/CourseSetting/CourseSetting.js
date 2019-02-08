import React from 'react';
import {
    Button, Dialog, DialogContent, DialogContentText,
    DialogActions, DialogTitle, withMobileDialog
} from '@material-ui/core';

const courseSetting = (props) => (
    <Dialog
        open={props.openCSetting} onClose={props.closeCSetting}
    >
        <DialogTitle>Course Setting</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Here you can add new courses or remove your old courses.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.addCourse}>Add Course</Button>
            <Button onClick={props.deleteCourse} color={'secondary'} disabled={props.disabled}>
            Delete Course
            </Button>
        </DialogActions>
    </Dialog>
);

export default withMobileDialog()(courseSetting);