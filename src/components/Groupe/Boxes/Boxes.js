import React from 'react';

import { Box0, Box1, Box2, Box3, Box4, Box5, Fav } from './Box/Box';
import classes from './Boxes.css';

const Boxes = props => {

    return (
        <table className={classes.Boxes}>
            <tbody>
                <tr>
                    <td className={classes.Box}><Box0 clicked={props.clickedBox0} /></td>
                    <td className={classes.Box}><Box1 clicked={props.clickedBox1} /></td>
                    <td className={classes.Box}><Box2 clicked={props.clickedBox2} /></td>
                    <td className={classes.Box}><Box3 clicked={props.clickedBox3} /></td>
                    <td className={classes.Box}><Box4 clicked={props.clickedBox4} /></td>
                    <td className={classes.Box}><Box5 clicked={props.clickedBox5} /></td>
                    <td className={classes.Box}><Fav clicked={props.clickedFav} /></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className={classes.Text}>{props.count0} Cards</td>
                    <td className={classes.Text}>{props.count1} Cards</td>
                    <td className={classes.Text}>{props.count2} Cards</td>
                    <td className={classes.Text}>{props.count3} Cards</td>
                    <td className={classes.Text}>{props.count4} Cards</td>
                    <td className={classes.Text}>{props.count5} Cards</td>
                    <td className={classes.Text}>{props.countF} Cards</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Boxes;