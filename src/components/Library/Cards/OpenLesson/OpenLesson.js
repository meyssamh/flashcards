import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import StarIcon from '@material-ui/icons/Star';
import { Dialog, DialogActions, DialogTitle, Divider, Button } from '@material-ui/core';

const openLesson = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>{props.title}</DialogTitle>
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 0 : contains {props.box0} Cards
            </Button>
            <Divider variant={'middle'} />
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 1 : contains {props.box1} Cards
            </Button>
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 2 : contains {props.box2} Cards
            </Button>
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 3 : contains {props.box3} Cards
            </Button>
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 4 : contains {props.box4} Cards
            </Button>
            <Button>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 5 : contains {props.box5} Cards
            </Button>
            <Divider variant={'middle'} />
            <Button>
                <DialogActions>
                    <StarIcon style={{ color: 'gold' }} />
                </DialogActions>
                &nbsp;Favorites : contains {props.fav} Cards
            </Button>
        </Dialog>
    );
}

export default openLesson;