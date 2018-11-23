import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import classes from './Groupe.css';

class Groupe extends Component {
    render() {

        const edit = <FontAwesomeIcon icon={faPencilAlt} />;
        const del = <FontAwesomeIcon icon={faTrashAlt} />;
        let courseItems = 0;
        let groupeCards = Object.keys(this.props.groupe).map(course => {
            return [...Array(this.props.groupe[course])].map(name => {
                return Object.keys(name).map((cards, id) => {
                    courseItems++; // to check if we have a lesson!
                    return (
                        <div key={course + cards + id} className={classes.Course}
                            onClick={this.props.clickedOpenGroupe}>
                            <p className={classes.Name}>{cards}</p>
                            <p className={classes.Group}>{course}</p>
                            <p className={classes.Count}>{Object.values(name)[id]} Cards</p>
                            <ul>
                                <li className={classes.ButtonEdit} title={'Edit'}
                                    onClick={this.props.clickedEdit}>
                                    {edit}
                                </li>
                                <li className={classes.ButtonDelete} title={'Delete'}
                                    value={cards} onClick={this.props.clickedDelete}>
                                    {del}
                                </li>
                            </ul>
                        </div>
                    );
                });
            });
        });

        groupeCards = courseItems === 0 ?
            <p>Please add a groupe of cards!</p> :
            groupeCards;

        return (
            <Fragment>{groupeCards}</Fragment>
        );
    }
}

Groupe.prototypes = {
    cards: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired
}

export default Groupe;