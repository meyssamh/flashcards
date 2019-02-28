import React, { Fragment } from 'react';
import { Card, CardContent, Divider, CardActions, IconButton, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    icon: {
        color: 'gold',
        position: 'absolute',
        top: 10,
        left: 10
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    card: {
        left: '10%',
        right: '10%',
        top: '30%',
        position: 'absolute'
    },
    button: {
        width: '100%'
    }
}

const question = (props) => {
    const { classes, clickedFav, childrenFav, clickedClose, content, clickedAnswer } = props;
    return (
        <Fragment>
            <IconButton className={classes.icon} onClick={clickedFav}>
                <Icon>{childrenFav}</Icon>
            </IconButton>
            <IconButton className={classes.closeButton} onClick={clickedClose}>
                <CloseIcon />
            </IconButton>
            <Card className={classes.card}>
                <CardContent>
                   {content}
                </CardContent>
                <Divider variant={'middle'} />
                <CardActions>
                    <Button className={classes.button} onClick={clickedAnswer}>Answer</Button>
                </CardActions>
            </Card>
        </Fragment>
    );
}

export default withStyles(styles)(question);