import React from 'react';

import classes from './Box.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export const Box0 = (props) => {
    return (
        <div className={classes.Box0} onClick={props.clicked}>
            0
        </div>
    );
}

export const Box1 = (props) => {
    return (
        <div className={classes.Box1} onClick={props.clicked}>
            1
        </div>
    );
}

export const Box2 = (props) => {
    return (
        <div className={classes.Box2} onClick={props.clicked}>
            2
        </div>
    );
}

export const Box3 = (props) => {
    return (
        <div className={classes.Box3} onClick={props.clicked}>
            3
        </div>
    );
}

export const Box4 = (props) => {
    return (
        <div className={classes.Box4} onClick={props.clicked}>
            4
        </div>
    );
}

export const Box5 = (props) => {
    return (
        <div className={classes.Box5} onClick={props.clicked}>
            5
        </div>
    );
}

export const Fav = (props) => {

    const start = <FontAwesomeIcon icon={faStar} />

    return (
        <div className={classes.Fav} onClick={props.clicked}>
            {star}
        </div>
    );
}