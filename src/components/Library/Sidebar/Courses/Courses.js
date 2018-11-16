import React from 'react';

import classes from './Courses.css';

const Courses = (props) => {
    return (
        <li className={classes.Course}>{props.course}</li>
    );
}

export default Courses;