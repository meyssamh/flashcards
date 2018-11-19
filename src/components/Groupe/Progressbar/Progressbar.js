import React from 'react';

import classes from './Progressbar.css';

const Progressbar = props => (
    <div className={classes.Placeholder}>
        <div className={classes.Progressbar} style={{ width: props.percent }} />
        <div className={classes.Percent}>{props.percent}%</div>
    </div>
);

export default Progressbar;