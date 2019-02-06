import React from 'react';

import classes from './Box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Box0 = props => (
    <button className={classes.Box0} onClick={props.clicked}>
        0
    </button>
);

export const Box1 = props => (
    <button className={classes.Box1} onClick={props.clicked}>
        1
    </button>
);

export const Box2 = props => (
    <button className={classes.Box2} onClick={props.clicked}>
        2
    </button>
);

export const Box3 = props => (
    <button className={classes.Box3} onClick={props.clicked}>
        3
    </button>
);

export const Box4 = props => (
    <button className={classes.Box4} onClick={props.clicked}>
        4
    </button>
);

export const Box5 = props => (
    <button className={classes.Box5} onClick={props.clicked}>
        5
    </button>
);

export const Fav = props => {

    const star = <FontAwesomeIcon icon={faStar} />

    return (
        <button className={classes.Fav} onClick={props.clicked}>
            {star}
        </button>
    );
}