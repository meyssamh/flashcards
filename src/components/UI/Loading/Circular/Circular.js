import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    circular: {
        align: 'center',
        color: 'grey',
        position: 'absolute',
        top: '40%',
        left: '45%'
    }
}

const circular = (props) => {
    const { classes } = props;

    return (
    <CircularProgress size={100} classes={{ root: classes.circular }}/>
);
    }
 
export default withStyles(styles)(circular);