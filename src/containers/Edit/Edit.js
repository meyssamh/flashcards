import React, { Component, Fragment } from 'react';

import QaA from '../../components/Edit/QaA/QaA';
import Bottomnav from '../../components/Edit/Bottomnav/Bottomnav';

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