import React from 'react';

import classes from './Sidebar.css';

const Sidebar = (props) => {
    return (
        <ul className={classes.Left}>
            <li className={classes.Courses}>Courses</li>
            <li className={classes.Course}>IT</li>
            <li className={classes.Course}>Wirtschaft</li>
            <li className={classes.Course}>Maschinenbau</li>
            {props.course}
        </ul>
    );
}
 
export default Sidebar;