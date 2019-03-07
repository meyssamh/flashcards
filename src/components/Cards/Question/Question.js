import React from 'react';
import { Card, CardContent, Divider, CardActions, IconButton, Button, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    icon: {
        color: 'gold',
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
    const {
        classes, clickedFav, childrenFav, nightOrDay, clickedClose, content,
        clickedAnswer, clickedNight, main, card, text, button, close
    } = props;
    return (
        <main style={{ backgroundColor: main }} className={classes.main}>
            <IconButton className={classes.icon} onClick={clickedFav} title={'Favorite'}>
                <Icon>{childrenFav}</Icon>
            </IconButton>
            <IconButton className={classes.nightIcon} onClick={clickedNight} title={'Night Mode'}
                style={{ color: button }}
            >
                <Icon>{nightOrDay}</Icon>
            </IconButton>
            <IconButton className={classes.closeButton} onClick={clickedClose} title={'Close'}
                style={{ color: close }}
            >
                <CloseIcon />
            </IconButton>
            <Card className={classes.card} style={{ background: card, color: text }}>
                <CardContent>
                    {content}
                </CardContent>
                <Divider />
                <CardActions>
                    <Button className={classes.button} onClick={clickedAnswer} style={{ color: text }}>
                        Answer
                    </Button>
                </CardActions>
            </Card>
        </main>
    );
}

export default withStyles(styles)(question);