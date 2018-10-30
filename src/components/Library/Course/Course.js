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
                <p className={classes.Name}>
                {props.children}
                Java
                </p>
                <p className={classes.Group}>
                {props.children}
                IT
                </p>
                <p className={classes.Count}>
                {props.children}
                17 Cards
                </p>
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