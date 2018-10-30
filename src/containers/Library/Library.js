import React, {Component, Fragment} from 'react';

import Sidebar from '../../components/Library/Sidebar/Sidebar';
import Course from '../../components/Library/Course/Course';
import classes from './Library.css';

class Main extends Component {
    render() { 
        return ( 
            <Fragment>
                <div>
                    <Sidebar />
                </div>
                <div className={classes.Groupe}>
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
            </Fragment>
        );
    }
}
 
export default Main;