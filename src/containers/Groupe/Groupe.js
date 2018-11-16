import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';
import Progressbar from '../../components/Groupe/Progressbar/Progressbar';
import Boxes from '../../components/Groupe/Boxes/Boxes';

class Groupe extends Component {
    state = {}

    addCardHandler = () => {
        // Add Card to Groupe
    }

    doneHandler = () => {
        // Done and going back to Library
    }

    openBox0Handler = () => {
        // Open Box 0
    }

    openBox1Handler = () => {
        // Open Box 1
    }

    openBox2Handler = () => {
        // Open Box 2
    }

    openBox3Handler = () => {
        // Open Box 3
    }

    openBox4Handler = () => {
        // Open Box 4
    }

    openBox5Handler = () => {
        // Open Box 5
    }

    openFavHandler = () => {
        // Open Fav
    }

    render() {

        const add = <FontAwesomeIcon icon={faPlus} />;

        return (
            <div className={classes.Groupe}>
                <button className={classes.Btn} title={'Add card'} onClick={this.addCardHandler}>{add}</button>
                <button className={classes.Done} onClick={this.doneHandler}>Done!</button>
                <div className={classes.Text}>Coursename</div>
                <div className={classes.Box}>
                    <div className={classes.Boxes}>
                        <Boxes clickedBox0={this.openBox0Handler} clickedBox1={this.openBox1Handler}
                            clickedBox2={this.openBox2Handler} clickedBox3={this.openBox3Handler}
                            clickedBox4={this.openBox4Handler} clickedBox5={this.openBox5Handler}
                            clickedFav={this.openFavHandler} countBox0={'count!'} countBox1={'count!'}
                            countBox2={'count!'} countBox3={'count!'} countBox4={'count!'} countBox5={'count!'}
                            countFav={'count!'} />
                    </div>
                    <div className={classes.Progress}>
                        <Progressbar width={'50%'} percent={'counting the percent!'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Groupe;