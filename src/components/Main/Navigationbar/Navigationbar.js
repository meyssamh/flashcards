import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import classes from './Navigationbar.css';

const Navigationbar = (props) => { 

    const setting = <FontAwesomeIcon icon={faCog} />;

    return (
        <ul className={classes.Topnav}>
            <li className={classes.Left}>
                Logo!
            </li>
            <li className={classes.Setting} onClick={props.clicked}>
                <div>
                    {setting}
                </div>
            </li>
            <li className={classes.Right} >
                {props.username}
                Username
            </li>
        </ul>
    );
}
 
export default Navigationbar;