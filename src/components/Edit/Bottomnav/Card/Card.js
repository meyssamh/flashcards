import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import classes from './Card.css';

const Card = props => {

    const del = <FontAwesomeIcon icon={faTrashAlt} />;

    return (
        <div className={classes.Card}>
            <div className={classes.Text}>
                jfhvbsdjvbsd jbvsjdbvs vdfvdfsd sdfgs dfgsfg sdfg sfgs gs gfsfd
            </div>
            <div className={classes.Number}>1</div>
            <div className={classes.Del} title={'Delete'}>{del}</div>
        </div>
    );
}

export default Card;