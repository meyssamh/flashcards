import React from 'react';

import classes from './Bottomnav.css';
import Card from './Card/Card';
import AddCard from './AddCard/AddCard';

const Bottomnav = (props) => {
    return (
        <div className={classes.Bottomnav}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <Card />
                        </td>
                        <td>
                            <AddCard />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bottomnav;