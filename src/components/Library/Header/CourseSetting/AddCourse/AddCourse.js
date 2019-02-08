import React from 'react';
import {
    Dialog, DialogContent, DialogContentText, DialogActions,
    DialogTitle, Button
} from '@material-ui/core';

const addCourse = (props) => {
    return (
        <Dialog open={props.openAddCourse} onClose={props.closeAddCourse}>
            <DialogTitle>Add Course</DialogTitle>
            <DialogContent>
                <DialogContentText>Please enter the name of your new course:</DialogContentText>
                {props.textFieldCourse}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedAdd}>Add</Button>
                <Button onClick={props.closeAddCourse}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default addCourse;