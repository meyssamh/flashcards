import React, {Component, Fragment} from 'react';

import Course from '../../components/Main/Course/Course';

class Main extends Component {
    render() { 
        return ( 
            <Fragment>
                <div>Bars</div>
                <Course/>
            </Fragment>
        );
    }
}
 
export default Main;