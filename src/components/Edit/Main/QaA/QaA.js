import React from 'react';
import {
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions,
    Button, Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    panel: {
        width: '90%',
        margin: 'auto',
        marginTop: 1
    }
}

const qaA = (props) => {
    const {
        classes, counter, question, answer, clickedEdit, clickedDelete, card,
        button, text, edit, del
    } = props;

    return (
        <ExpansionPanel className={classes.panel} style={{ background: card }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{ color: button }} />}>
                <Typography style={{ color: text }}>
                    {counter}: {question}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography style={{ color: text }}>
                    Answer: {answer}
                </Typography>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Button onClick={clickedEdit} style={{ color: edit }}>Edit</Button>
                <Button onClick={clickedDelete} style={{ color: del }}>Delete</Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    );
}

export default withStyles(styles)(qaA);