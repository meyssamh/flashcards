import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';

const Groupe = props => {

    const edit = <FontAwesomeIcon icon={faPencilAlt} />;
    const del = <FontAwesomeIcon icon={faTrashAlt} />;
    let groupeCards = Object.keys(props.groupe)
        .map(course => {
            return Object.keys(course).map((id) => {
                return [...Array(props.groupe[course][id])].map((name) => {
                    console.log(name)
                    console.log(id)
                    console.log(course)
                    if (name !== undefined) {
                        return (
                            <div key={course + id + name} className={classes.Course}
                                onClick={props.clickedOpenGroupe}>
                                <p className={classes.Name}>{name}</p>
                                <p className={classes.Group}>{course}</p>
                                <p className={classes.Count}>
                                    !!! Cards
                                </p>
                                <ul>
                                    <li className={classes.ButtonEdit} title={'Edit'}
                                        onClick={props.clickedEdit}>
                                        {edit}
                                    </li>
                                    <li className={classes.ButtonDelete} title={'Delete'}
                                        onClick={props.clickedDelete}>
                                        {del}
                                    </li>
                                </ul>
                            </div>
                        );
                    }
                    return null;
                });
            });
        });
        console.log(groupeCards);
    if (groupeCards.length === 0) {
        groupeCards = <p>Please add a groupe of cards!</p>
    }
    return (
        <div>{groupeCards}</div>
    );
}

export default Groupe;