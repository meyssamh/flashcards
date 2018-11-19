import React from 'react';

import { Box0, Box1, Box2, Box3, Box4, Box5, Fav } from './Box/Box';
import classes from './Boxes.css';

const Boxes = props => {

    const Box = Object.keys(props.cardsCount)
        .map(box => {
            return [...Array(props.cardsCount[box])].map(count => {
                return <td key={box + count} className={classes.Text}>{count} Cards</td>
            })
        })
    return (
        <table className={classes.Boxes}>
            <tbody>
                <tr>
                    <td className={classes.Box} clicked={props.clickedBox0}><Box0 /></td>
                    <td className={classes.Box} clicked={props.clickedBox1}><Box1 /></td>
                    <td className={classes.Box} clicked={props.clickedBox2}><Box2 /></td>
                    <td className={classes.Box} clicked={props.clickedBox3}><Box3 /></td>
                    <td className={classes.Box} clicked={props.clickedBox4}><Box4 /></td>
                    <td className={classes.Box} clicked={props.clickedBox5}><Box5 /></td>
                    <td className={classes.Box} clicked={props.clickedFav}><Fav /></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    {Box}
                </tr>
            </tbody>
        </table>
    );
}

export default Boxes;