import React from 'react';
import classNames from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

const snackbarError = (props) => {
    const { classes, className, closeALE, snackbarAddLE, ...other } = props;

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackbarAddLE} autoHideDuration={3000} onClose={closeALE}
        >
            <SnackbarContent className={classNames(classes.error, className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <ErrorIcon className={classNames(classes.icon, classes.iconVariant)} />
                        &nbsp;Oops! Lesson already exists!
                    </span>
                } {...other}
            />
        </Snackbar>
    );
}

export default withStyles(styles)(snackbarError);