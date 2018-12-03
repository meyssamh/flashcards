import React, { Component, Fragment } from 'react';

import QaA from '../../components/Edit/QaA/QaA';
import Bottomnav from '../../components/Edit/Bottomnav/Bottomnav';

//FIXME: New Style must be done!
//FIXME: Must fix the css for buttons!
//FIXME: Starfunction must be corrected!
//TODO: Add animation to show the anwser!


class Edit extends Component {
    state = {}

    render() {

        return (
            <Fragment>
                <QaA />
                <Bottomnav />
            </Fragment>
        );
    }
}

export default Edit;