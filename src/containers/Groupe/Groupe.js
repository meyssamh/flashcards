import React, {Component} from 'react';

import classes from './Groupe.css';
//import Box from '../../components/Groupe/Box/Box';
import Progressbar from '../../components/Groupe/Progressbar/Progressbar';

class Groupe extends Component {
    render() { 
        return (
            <div className={classes.Groupe}><Progressbar /></div>
        );
    }
}
 
export default Groupe;