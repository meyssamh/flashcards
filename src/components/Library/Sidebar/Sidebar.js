import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './Sidebar.css';
import Courses from './Courses/Courses';

const sidebar = (props) => {

    let sidebarCourses = Object.keys(props.coursename)
        .map(courseID => {
            return [...Array(props.coursename[courseID])].map((name) => {
                return <Courses key={courseID + name} children={name} />
            })
        });
        if (sidebarCourses.length === 0) {
            sidebarCourses = <p>Please add a Course</p>
        }
    const add = <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className={classes.Side}>
            <div className={classes.Courses}>Courses</div>
            <ul className={classes.Left}>
                {sidebarCourses}
            </ul>
            <button className={classes.Add} onClick={props.clickedAddCourse}>{add}&nbsp;&nbsp;&nbsp;Add Course</button>
        </div>
    );
}

export default sidebar;