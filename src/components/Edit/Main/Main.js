import React from 'react';
import { IconButton, Button, Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        position: 'absolute'
    },
    addButton: {
        position: 'absolute',
        top: 10,
        left: 10
    },
    nightIcon: {
        position: 'absolute',
        top: 10,
        left: 68
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    main: {
        width: '100%',
        height: '100%',
        marginTop: 80
    },
    addDiv: {
        marginTop: 10,
        marginBottom: 50
    },
    add: {
        width: '90%',
        height: 48,
        margin: 'auto',
        display: 'block'
    }
}

const main = (props) => {
    const { classes, clickedAdd, clickedNight, nightOrDay, clickedClose, cards,
        button, nightButton, main
    } = props;

    return (
        <main style={{ background: main }} className={classes.root}>
            <IconButton className={classes.addButton} onClick={clickedAdd} title={'Add'}
                style={{ color: button }}
            >
                <AddIcon />
            </IconButton>
            <IconButton className={classes.nightIcon} onClick={clickedNight} title={'Night Mode'}
                style={{ color: nightButton }}
            >
                <Icon>{nightOrDay}</Icon>
            </IconButton>
            <IconButton className={classes.closeButton} onClick={clickedClose} title={'Close'}
                style={{ color: button }}
            >
                <CloseIcon />
            </IconButton>
            <div className={classes.main}>
                {cards}
                <div className={classes.addDiv}>
                    <Button variant={'outlined'} className={classes.add} onClick={clickedAdd} title={'Add'}
                        style={{ color: button, borderColor: button }}
                    >
                        Add new Card
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default withStyles(styles)(main);