import React from 'react';
import {
    Dialog, DialogContent, DialogContentText, DialogActions,
    DialogTitle, Button, Select, FormControl, MenuItem
} from '@material-ui/core';

const deleteCourse = (props) => {
    return (
        <Dialog
            open={props.openDeleteCourse} onClose={props.closeDeleteCourse}
        >
            <DialogTitle>Delete Course</DialogTitle>
            <DialogContent>
                <DialogContentText>Please Select course:</DialogContentText>
                <FormControl>
                    <Select value={props.select} name={'show'}
                        onChange={props.changedDelete}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {props.items}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.clickedDelete} color={'secondary'} 
                disabled={props.disabled}
                >
                    Delete
                </Button>
                <Button onClick={props.closeDeleteCourse}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default deleteCourse;