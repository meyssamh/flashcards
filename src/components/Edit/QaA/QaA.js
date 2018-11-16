import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './QaA.css';

const QaA = (props) => {

    const plus = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className={classes.QaA}>
            <button className={classes.Done}>Done</button>
            <table>
                <tbody>
                    <tr>
                        <td className={classes.Q}>
                            Question
                        </td>
                        <td className={classes.A}>
                            Answer
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.BoxQ}>
                            <div className={classes.TextQ}>
                                mfhvbdjfvhbj
                            </div>
                        </td>
                        <td className={classes.BoxA}>
                            <div className={classes.TextA}>
                                mfhvbdjfvhbj
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className={classes.Delete} title={'Delete Card'}>X</button>
            <button className={classes.Plus} title={'Add Card'}>{plus}</button>
        </div>
    );
}

export default QaA;