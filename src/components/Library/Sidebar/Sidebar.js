import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './Sidebar.css';

class Sidebar extends Component {
    render() {

        const add = <FontAwesomeIcon icon={faPlus} />;
        const del = <FontAwesomeIcon icon={faTrash} />;

        return (
            <div className={classes.Side} >
                <div className={classes.Courses}>Courses</div>
                <div className={classes.Left}>
                    {this.props.sidebarCourses}
                </div>
                <button className={classes.Add} onClick={this.props.clickedAddCourse}>{add}</button>
                <button className={classes.Delete} onClick={this.props.clickedDeleteCourse}>{del}</button>
            </div>
        );
    }
}

export default Sidebar;