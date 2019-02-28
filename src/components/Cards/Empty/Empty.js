import React, { Fragment } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    typography: {
        left: '10%',
        right: '10%',
        top: '30%',
        position: 'absolute',
        textAlign: 'center'
    }
}

const empty = (props) => {
    const { classes, clickedClose } = props;
    return (
        <Fragment>
            <IconButton className={classes.closeButton} onClick={clickedClose}>
                <CloseIcon />
            </IconButton>
            <Typography className={classes.typography}>
                Well done!<br />There is no questions left!
            </Typography>
        </Fragment>
    );
}

export default withStyles(styles)(empty);