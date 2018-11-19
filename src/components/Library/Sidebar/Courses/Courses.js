import React from 'react';

import classes from './Courses.css';

const courses = props => (
    <li className={classes.Course}>{props.children}</li>
);

export default courses;