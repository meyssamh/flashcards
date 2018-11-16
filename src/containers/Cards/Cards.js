import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classes from './Cards.css';

class Cards extends Component {
    state = {}

    clickedFavoriteHandler = () => {
        // Make Card Faivorite
    }

    clickedCloseHandler = () => {
        // Close and go back to Groupe
    }

    clickedWrongHandler = () => {
        // Wrong anwser and Card goes to First Box
    }

    clickedRightHandler = () => {
        // right anwser and Card goes to next Box
    }

    render() {

        const star = <FontAwesomeIcon icon={faStar} />;

        return (
            <div className={classes.Cards}>
                <button className={classes.Btn} onClick={this.clickedFavoriteHandler}>{star}</button>
                <button className={classes.Close} onClick={this.clickedCloseHandler}>X</button>
                <div className={classes.Box}>
                    <div className={classes.Text}></div>
                </div>
                <button className={classes.Wrong} onClick={this.clickedWrongHandler}>Wrong</button>
                <button className={classes.Correct} onClick={this.clickedRightHandler}>Right</button>
            </div>
        );
    }
}

export default Cards;