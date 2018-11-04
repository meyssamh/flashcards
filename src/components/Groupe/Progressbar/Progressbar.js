import React from 'react';

import classes from './Progressbar.css';

const Progressbar = (props) => {
    return (
        <div className={classes.Placeholder}>
            <div className={classes.Progressbar}></div>
            <div className={classes.Percent}>50%</div>
        </div>
    );
}
 
export default Progressbar;