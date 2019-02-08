import React from 'react';
import {
    Dialog, DialogContent, DialogActions, DialogTitle, Button
} from '@material-ui/core';

const deleteCourse = (props) => {
    return (
        <Dialog
            open={props.openDeleteLesson} onClose={props.closeDeleteLesson}
        >
            <DialogTitle>Delete Lesson</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this lesson? You won't be able to revert this!
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedDelete} color={'secondary'}>
                   Yes
                </Button>
                <Button onClick={props.closeDeleteLesson}>No</Button>
            </DialogActions>
        </Dialog>
    );
}

export default deleteCourse;