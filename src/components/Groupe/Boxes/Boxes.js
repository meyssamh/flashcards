import React from 'react';

import {Box0, Box1, Box2, Box3, Box4, Box5, Fav} from './Box/Box';
import classes from './Boxes.css';

const Boxes = (props) => {
    return (
        <table className={classes.Boxes}>
            <tbody>
                <tr>
                    <td className={classes.Box}><Box0 /></td>
                    <td className={classes.Box}><Box1 /></td>
                    <td className={classes.Box}><Box2 /></td>
                    <td className={classes.Box}><Box3 /></td>
                    <td className={classes.Box}><Box4 /></td>
                    <td className={classes.Box}><Box5 /></td>
                    <td className={classes.Box}><Fav /></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className={classes.Text}>17 Cards</td>
                    <td className={classes.Text}>17 Cards</td>
                    <td className={classes.Text}>55 Cards</td>
                    <td className={classes.Text}>0 Cards</td>
                    <td className={classes.Text}>1000 Cards</td>
                    <td className={classes.Text}>17 Cards</td>
                    <td className={classes.Text}>17 Cards</td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default Boxes;