import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';

const Groupe = (props) => {

    const edit = <FontAwesomeIcon icon={faPencilAlt} />;
    const del = <FontAwesomeIcon icon={faTrashAlt} />;

    return (
        <div className={classes.Course} onClick={props.clickedOpenGroupe}>
            <p className={classes.Name}>
                {props.groupe}
            </p>
            <p className={classes.Group}>
                {props.course}
            </p>
            <p className={classes.Count}>
                {props.count} Cards
            </p>
            <ul>
                <li className={classes.ButtonEdit} title={'Edit'} onClick={props.clickedEdit}>
                    {edit}
                </li>
                <li className={classes.ButtonDelete} title={'Delete'} onClick={props.clickedDelete}>
                    {del}
                </li>
            </ul>
        </div>
    );
}

export default Groupe;