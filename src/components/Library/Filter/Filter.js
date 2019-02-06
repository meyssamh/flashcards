import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, Typography, Select, MenuItem } from '@material-ui/core';

const styles = {
    form: {
        marginTop: 8
    },
    typography: {
        useNextVariants: true
    }
};

function filter(props) {
    const { classes, changedFilter, text, select, items, ...other } = props;

    return (
        <FormControl className={classes.form} {...other}>
            <Typography component={'div'} className={classes.typography} style={{ color: text }}>
                Filter :&nbsp;&nbsp;
                <Select value={select} name={'show'}
                    onChange={props.changedFilter} style={{ color: text }}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    {items}
                </Select>
            </Typography>
        </FormControl>
    );
}

export default withStyles(styles)(filter);