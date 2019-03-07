import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@material-ui/core';

const editCard = (props) => {
    const {
        open, questionValue, changedQuestion, answerValue, changedAnswer,
        clickedEdit, close
    } = props
    return (
        <Dialog fullWidth={true} open={open} onClose={close}>
            <DialogTitle>Edit Card</DialogTitle>
            <DialogContent>
                Question:
                <TextField
                    placeholder={'Question'}
                    autoFocus={true}
                    multiline={true}
                    margin={'normal'}
                    value={questionValue}
                    onChange={changedQuestion}
                    fullWidth={true}
                />
            </DialogContent>
            <DialogContent>
                Answer:
                <TextField
                    placeholder={'Answer'}
                    multiline={true}
                    margin={'normal'}
                    value={answerValue}
                    onChange={changedAnswer}
                    fullWidth={true}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={clickedEdit}>Edit</Button>
                <Button onClick={close}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default editCard;