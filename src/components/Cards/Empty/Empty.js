import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
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
    const { classes, clickedClose, main, text, close } = props;
    return (
        <main style={{ background: main }} className={classes.main}>
            <IconButton className={classes.closeButton} onClick={clickedClose} style={{ color: close }}>
                <CloseIcon />
            </IconButton>
            <Typography className={classes.typography} style={{ color: text }}>
                Well done!<br />There is no questions left!
            </Typography>
        </main>
    );
}

export default withStyles(styles)(empty);