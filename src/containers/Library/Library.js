import React, { Component, Fragment } from 'react';

import Navigationbar from '../../components/Library/Navigationbar/Navigationbar';
import Sidebar from '../../components/Library/Sidebar/Sidebar';
import Groupe from '../../components/Library/Groupe/Groupe';
import classes from './Library.css';

class Library extends Component {
    state = {
        Coursename: {
            0: 'IT',
            1: 'BWL',
            2: 'VWL'
        },
        Groupe: {
            'IT': {
                0: 'Java',
                1: 'JavaScript'
            },
            'BWL': {
                0: 'Marketing',
                1: 'Steuerlehre',
                2: 'BWL'
            },
            'VWL': {
                0: 'Makro 1',
                1: 'Makro 2',
                2: 'VWL'
            }
        }
    }

    settingsToggleHandler = () => {
        // Toggle for Setting in Navigationbar
    }

    courseAddHandler = () => {
        // Add Course to Sidebar
    }

    groupeAddHandler = () => {
        // Add Groupe to Groupe
    }

    openGroupeHandler = () => {
        // Open Groupe (window.push or window.location)
    }

    editGroupeHandler = () => {
        // Edit Groupe
    }

    deleteGroupeHandler = () => {
        // Delete Groupe
    }

    render() {

        return (
            <Fragment>
                <Navigationbar username={'Username'} clickedSettings={this.settingsToggleHandler} />
                <Sidebar coursename={this.state.Coursename} clickedAddCourse={this.courseAddHandler} />
                <div className={classes.Groupe}>
                    <input className={classes.Btn} type={'button'} value={'+'}  onClick={this.groupeAddHandler} />
                    <Groupe clickedOpenGroupe={this.openGroupeHandler} groupe={this.state.Groupe}
                         clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Library;