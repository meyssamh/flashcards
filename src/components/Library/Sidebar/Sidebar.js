import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './Sidebar.css';
import Courses from './Courses/Courses';

const Sidebar = (props) => {

    const add = <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className={classes.Side}>
            <div className={classes.Courses}>Courses</div>
            <ul className={classes.Left}>
                <Courses course={props.course} />
            </ul>
            <button className={classes.Add} onClick={props.clickedAddCourse}>{add}&nbsp;&nbsp;&nbsp;Add Course</button>
        </div>
    );
}

export default Sidebar;