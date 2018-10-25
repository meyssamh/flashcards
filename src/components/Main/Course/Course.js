import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

import classes from './Course.css';

const Course = (props) => {

    const edit = <FontAwesomeIcon icon={faPencilAlt} />;
    const del = <FontAwesomeIcon icon={faTrashAlt} />;

    return(
        <Fragment>
            <div className={classes.Course}>
                <p className={classes.Text}>
                {props.children}
                dope
                </p>
                {/* <p className={classes.Text}>
                {props.children}
                dope
                </p>
                <p className={classes.Text}>
                {props.children}
                dope
                </p> */}
                <ul>
                    <li className={classes.ButtonEdit}>
                        {edit}
                    </li>
                    <li className={classes.ButtonDelete}>
                        {del}
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}
 
export default Course;