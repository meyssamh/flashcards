import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    Button, Slide
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    actions: {
        justifyContent: 'space-around'
    },
    false: {
        color: '#f50057'
    },
    true: {
        color: '#00f557'
    }
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const answer = (props) => {
    const { classes, answer, openAnswer, closeAnswer, clickedFalse, clickedTrue } = props;

    return (
        <Dialog open={openAnswer} TransitionComponent={Transition} onClose={closeAnswer}>
            <DialogTitle>Answer</DialogTitle>
            <DialogContent>
                <DialogContentText>
                {answer}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button className={classes.false} onClick={clickedFalse}>False</Button>
                <Button className={classes.true} onClick={clickedTrue}>True</Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(answer);