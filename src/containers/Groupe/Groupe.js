import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';
import Progressbar from '../../components/Groupe/Progressbar/Progressbar';
import Boxes from '../../components/Groupe/Boxes/Boxes';


const Groupe = (props) => {

    const add = <FontAwesomeIcon icon={faPlus} />;

    return (
        <div className={classes.Groupe}>
            <div className={classes.Btn} title={'Add card'}>{add}</div>
            <div className={classes.Text}>Java</div>
            <div className={classes.Box}>
                <div className={classes.Boxes}>
                    <Boxes />
                </div>
                <div className={classes.Progress}>
                    <Progressbar />
                </div>
            </div>
        </div>
    );
}
 
export default Groupe;