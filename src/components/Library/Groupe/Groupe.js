import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';

class Groupe extends Component {
    render() {

        const edit = <FontAwesomeIcon icon={faPencilAlt} />;
        const del = <FontAwesomeIcon icon={faTrashAlt} />;

        return (
            <div /*key={this.props.cards + this.props.course + this.props.count}*/ className={classes.Course}
                onClick={this.props.clickedOpenGroupe}>
                <p className={classes.Name}>{this.props.cards}</p>
                <p className={classes.Group}>{this.props.course}</p>
                <p className={classes.Count}>{this.props.count} Cards</p>
                <button className={classes.ButtonEdit} title={'Delete'}
                    type={'button'} value={this.props.cards} name={this.props.course}
                    onClick={this.props.clickedDelete}>{edit}</button>
                <button className={classes.ButtonDelete} title={'Delete'}
                    type={'button'} value={this.props.cards} name={this.props.course}
                    onClick={this.props.clickedDelete}>{del}</button>
            </div>
        );
    }
}

export default Groupe;