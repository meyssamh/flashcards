import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Button, Slide
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    actions: {
        justifyContent: 'space-around'
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const answer = (props) => {
    const { classes, answer, openAnswer, closeAnswer, clicked } = props;

    return (
        <Dialog open={openAnswer} TransitionComponent={Transition} onClose={closeAnswer}>
            <DialogTitle>Answer</DialogTitle>
            <DialogContent>
                <DialogContentText>
                {answer}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={clicked}>Put card in Box 1</Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(answer);