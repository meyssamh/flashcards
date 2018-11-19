import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './AddCard.css';

const AddCard = props => {

    const plus = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className={classes.AddCard}>
            <div className={classes.Text}>Add Card</div>
            <div className={classes.Plus}>{plus}</div>
        </div>
    );
}

export default AddCard;