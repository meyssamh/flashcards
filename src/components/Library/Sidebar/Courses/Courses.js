import React from 'react';

import classes from './Courses.css';

const courses = props => (
    <button className={classes.Course} onClick={props.clickedOnCourse}
        value={props.value}>
        {props.children}
    </button>
);

export default courses;