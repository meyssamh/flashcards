import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import classes from './Sidebar.css';
import Courses from './Courses/Courses';

class Sidebar extends Component {
    render() {

        let sidebarCourses = Object.keys(this.props.coursename)
            .map(courseID => {
                return [...Array(this.props.coursename[courseID])].map((name) => {
                    return <Courses key={courseID + name} children={name} />
                })
            });
        if (sidebarCourses.length === 0) {
            sidebarCourses = <p>Please add a Course</p>
        }
        const add = <FontAwesomeIcon icon={faPlus} />;
        const del = <FontAwesomeIcon icon={faTrash} />;

        return (
            <div className={classes.Side} onClick={this.props.clickedOnCourse}>
                <div className={classes.Courses}>Courses</div>
                <ul className={classes.Left}>
                    {sidebarCourses}
                </ul>
                <button className={classes.Add} onClick={this.props.clickedAddCourse}>{add}</button>
                <button className={classes.Delete} onClick={this.props.clickedDeleteCourse}>{del}</button>
            </div>
        );
    }
}

Sidebar.prototypes = {
    name: PropTypes.string.isRequired
}

export default Sidebar;