import React from 'react';
import {
    Dialog, DialogContent, DialogContentText, DialogActions,
    DialogTitle, Button, FormControl, Select
} from '@material-ui/core';

const addLesson = (props) => {
    return (
        <Dialog open={props.openAddLesson} onClose={props.closeAddLesson}>
            <DialogTitle>Add Lesson</DialogTitle>
            <DialogContent>
                <DialogContentText>Please select course:</DialogContentText>
                <FormControl>
                    <Select value={props.select} name={'select'} onChange={props.changedSelect}>
                        {props.items}
                    </Select>
                </FormControl>
                <DialogContentText>Please enter the name of your new lesson:</DialogContentText>
                {props.textFieldLesson}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedAdd} disabled={props.disabled}>Add</Button>
                <Button onClick={props.closeAddLesson}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default addLesson;