import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import * as actions from '../../store/actions/index';

import QaA from '../../components/Edit/QaA/QaA';
import Bottomnav from '../../components/Edit/Bottomnav/Bottomnav';

//FIXME: New Style must be done!
//FIXME: Must fix the css for buttons!
//FIXME: Starfunction must be corrected!
//TODO: Add animation to show the anwser!


class Edit extends Component {
    state = {
        Lesson: {}
    }

    componentDidMount() {
        const lesson = this.props.Lesson;
        if (lesson === null) {
            return <Redirect to={'/'} />
        }
        this.setState({
            Lesson: lesson
        });
    }

    closePageHandler = () => {
        const lessons = this.props.Lessons;
        console.log('closed')
        this.props.history.push('/');
        this.props.onPostData(lessons)
    }

    render() {

        if (this.props.Lesson === null) {
            return <Redirect to={'/'} />
        }

        console.log(this.props.Lesson)

        return (
            <Fragment>
                <QaA />
                <Bottomnav />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        Lessons: state.Library.Lessons,
        Lesson: state.Edit.Lesson
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (lessons) => dispatch(actions.postData(lessons))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);