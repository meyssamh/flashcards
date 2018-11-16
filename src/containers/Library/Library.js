import React, { Component, Fragment } from 'react';

import Navigationbar from '../../components/Library/Navigationbar/Navigationbar';
import Sidebar from '../../components/Library/Sidebar/Sidebar';
import Groupe from '../../components/Library/Groupe/Groupe';
import classes from './Library.css';

class Library extends Component {
    state = {}

    settingsToggleHandler = () => {
        // Toggle for Setting in Navigationbar
    }

    courseAddHandler = () => {
        // Add Course to Sidebar
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
                <Sidebar course={'Coursename'} clickedAddCourse={this.courseAddHandler} />
                <div className={classes.Groupe}>
                    <Groupe clickedOpenGroupe={this.openGroupeHandler} groupe={'Groupe'} course={'Coursename'}
                        count={'count'} clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Library;