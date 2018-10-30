import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faPlus} from '@fortawesome/free-solid-svg-icons';

import classes from './Sidebar.css';

const Sidebar = (props) => {

    const setting = <FontAwesomeIcon icon={faCog} />;
    const add = <FontAwesomeIcon icon={faPlus} />;

    return (
        <Fragment>
            <ul className={classes.Nav}>
                    <li className={classes.User} >
                        {props.username}
                        Username
                    </li>
                    <li className={classes.Border}>
                        <div className={classes.Setting} onClick={props.clicked}>
                            {setting}
                        </div>
                    </li>
            </ul>
            <div className={classes.Side}>
                <div className={classes.Courses}>Courses</div>
                <ul className={classes.Left}>        
                    <li className={classes.Course}>IT</li>
                    <li className={classes.Course}>Wirtschaft</li>
                    <li className={classes.Course}>Maschinenbau</li>
                    {props.course}
                </ul>
                <div className={classes.Add}>{add}&nbsp;&nbsp;&nbsp;Add Course</div>
            </div>
            
            
            {/* <ul className={classes.Left}>
                <li>
                    <ul className={classes.Left}>
                        
                        <li className={classes.Course}>IT</li>
                        <li className={classes.Course}>Wirtschaft</li>
                        <li className={classes.Course}>Maschinenbau</li>
                        {props.course}
                    </ul>
                </li>
                <li className={classes.Add}>{add}  Add Course</li>
            </ul> */}
            
        </Fragment>
    );
}
 
export default Sidebar;