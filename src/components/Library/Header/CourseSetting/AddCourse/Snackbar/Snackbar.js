import React from 'react';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    success: {
        backgroundColor: green[600],
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

const snackbar = (props) => {
    const { classes, className, closeAC, snackbarAddC, ...other } = props;

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackbarAddC} autoHideDuration={3000} onClose={closeAC}
        >
            <SnackbarContent className={classNames(classes.success, className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <CheckCircleIcon className={classNames(classes.icon, classes.iconVariant)} />
                        &nbsp; Course Added!
                    </span>
                } {...other}
            />
        </Snackbar>
    );
}

export default withStyles(styles)(snackbar);