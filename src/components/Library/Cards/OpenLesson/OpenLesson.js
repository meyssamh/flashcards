import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import StarIcon from '@material-ui/icons/Star';
import { Dialog, DialogActions, DialogTitle, Divider, Button } from '@material-ui/core';

const openLesson = (props) => {
    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>{props.title}</DialogTitle>
            <Button disabled={props.disableBox0} onClick={props.clicked0} value={0}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 0 : contains {props.box0} Cards
            </Button>
            <Divider variant={'middle'} />
            <Button disabled={props.disableBox1} onClick={props.clicked1} value={1}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 1 : contains {props.box1} Cards
            </Button>
            <Button disabled={props.disableBox2} onClick={props.clicked2} value={2}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 2 : contains {props.box2} Cards
            </Button>
            <Button disabled={props.disableBox3} onClick={props.clicked3} value={3}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 3 : contains {props.box3} Cards
            </Button>
            <Button disabled={props.disableBox4} onClick={props.clicked4} value={4}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 4 : contains {props.box4} Cards
            </Button>
            <Button disabled={props.disableBox5} onClick={props.clicked5} value={5}>
                <DialogActions>
                    <DehazeIcon />
                </DialogActions>
                &nbsp;Box 5 : contains {props.box5} Cards
            </Button>
            <Divider variant={'middle'} />
            <Button disabled={props.disableFav} onClick={props.clickedF} value={'Favorite'}>
                <DialogActions>
                    <StarIcon style={{ color: 'gold' }} />
                </DialogActions>
                &nbsp;Favorites : contains {props.fav} Cards
            </Button>
        </Dialog>
    );
}

export default openLesson;