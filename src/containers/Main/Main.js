import React, {Component, Fragment} from 'react';

import Navigationbar from '../../components/Main/Navigationbar/Navigationbar';
import Sidebar from '../../components/Main/Sidebar/Sidebar';
import Course from '../../components/Main/Course/Course';

class Main extends Component {
    render() { 
        return ( 
            <Fragment>
                <Navigationbar />
                <div className={Main}>
                    <Sidebar />
                    <div className={Main}>
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Main;