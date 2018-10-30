import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import classes from './Navigationbar.css';

const Navigationbar = (props) => { 

    const setting = <FontAwesomeIcon icon={faCog} />;

    return (
        <div className={classes.Topnav}>
            <div className={classes.Left} >
                {props.username}
                Username
            </div>
            <div className={classes.Border}>
                <div className={classes.Setting} onClick={props.clicked}>
                    {setting}
                </div>
            </div>
        </div>
    );
}
 
export default Navigationbar;