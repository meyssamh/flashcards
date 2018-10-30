import React, {Fragment} from 'react';

// import classes from './Bars.css';
import Navigationbar from './Navigationbar/Navigationbar';
import Sidebar from './Sidebar/Sidebar';

// Toolbars and side Drawer will be built here!
const Bars = (props) => (
    <Fragment>
        <Navigationbar />
        <Sidebar />
        {/* <main className={classes.Content}>
            {props.children}
        </main> */}
    </Fragment>
);

export default Bars;