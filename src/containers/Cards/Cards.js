import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import Question from '../../components/Cards/Question/Question';
import Answer from '../../components/Cards/Answer/Answer';
import Answer0 from '../../components/Cards/Answer/Answer0';
import Empty from '../../components/Cards/Empty/Empty';
import * as actions from '../../store/actions/index';

class Cards extends Component {
    state = {
        Night: {
            Close: 'white',
            Main: '#455a64',
            Card: '#263238',
            Text: 'white',
            NightButton: '#263238'
        },
        Day: {
            Close: '#263238',
            Main: 'white',
            Card: '#fffde7',
            Text: '#263238',
            NightButton: 'gold'
        },
        AnswerOpen: false
    }

    closePageHandler = () => {
        const lessons = this.props.Lessons;
        this.props.history.push('/library');
        this.props.onPostData(lessons);
    }

    answerHandler = () => {
        this.setState({
            AnswerOpen: true
        });
    }

    closeAnswerHandler = () => {
        this.setState({
            AnswerOpen: false
        });
    }

    falseAnswerHandler = () => {
        this.setState({
            AnswerOpen: false
        });
        this.props.onFalseAnswer();
    }

    trueAnswerHandler = () => {
        this.setState({
            AnswerOpen: false
        });
        this.props.onTrueAnswer();
    }

    box0AnswerHandler = () => {
        this.setState({
            AnswerOpen: false
        });
        this.props.onBox0Answer();
    }

    render() {

        if (this.props.Block === null) {
            return <Redirect to={'/'} />
        }

        const icon = this.props.Favorite ? 'star_icon' : 'star_border_icon';

        const nightIcon = this.props.NightMode ? 'brightness_3_icon' : 'wb_sunny_icon';

        const boxes = this.props.Boxes;

        const counter = this.props.Counter;

        const question = this.props.Question;

        const answer = this.props.Answer;

        let nightMode = this.props.NightMode; // to check for the night mode

        let day = this.state.Day;

        let night = this.state.Night;

        let mode = nightMode ? night : day;

        let empty = this.props.Empty; // to show message after all cards are done

        let content = empty === false ?
            <Fragment>
                <Question clickedFav={this.props.onFavorite} childrenFav={icon} card={mode.Card}
                    clickedClose={this.closePageHandler} content={question} text={mode.Text}
                    clickedAnswer={this.answerHandler} nightOrDay={nightIcon} button={mode.NightButton}
                    clickedNight={this.props.onNightMode} main={mode.Main} close={mode.Close}
                />
                {boxes[counter] === 0 ?
                    <Answer0 openAnswer={this.state.AnswerOpen} closeAnswer={this.closeAnswerHandler}
                        clicked={this.box0AnswerHandler} answer={answer}
                    /> :
                    <Answer openAnswer={this.state.AnswerOpen} closeAnswer={this.closeAnswerHandler}
                        clickedFalse={this.falseAnswerHandler} clickedTrue={this.trueAnswerHandler}
                        answer={answer}
                    />}
            </Fragment> :
            <Empty clickedClose={this.closePageHandler} main={mode.Main} text={mode.Text}
                    close={mode.Close}
            />;

        return (
            content
        );
    }
}

const mapStateToProps = state => {
    return {
        Lessons: state.Library.Lessons,
        Block: state.Cards.Block,
        Course: state.Cards.Course,
        Lesson: state.Cards.Lesson,
        Boxes: state.Cards.Boxes,
        Question: state.Cards.Question,
        Answer: state.Cards.Answer,
        Counter: state.Cards.Counter,
        Favorite: state.Cards.Favorite,
        Ids: state.Cards.Ids,
        Empty: state.Cards.Empty,
        NightMode: state.Library.NightMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNightMode: () => dispatch(actions.nightMode()),
        onPostData: (lessons) => dispatch(actions.postData(lessons)),
        onTrueAnswer: () => dispatch(actions.trueAnswer()),
        onFalseAnswer: () => dispatch(actions.falseAnswer()),
        onBox0Answer: () => dispatch(actions.box0Answer()),
        onFavorite: () => dispatch(actions.favorite())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);