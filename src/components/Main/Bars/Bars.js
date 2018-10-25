import React, {Fragment} from 'react';

import classes from './Bars.css';

// Toolbars and side Drawer will be built here!
const Bars = (props) => (
    <Fragment>
        <div>Toolbar, SideDrawer</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default Bars;