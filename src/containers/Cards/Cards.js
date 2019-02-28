import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import Question from '../../components/Cards/Question/Question';
import Answer from '../../components/Cards/Answer/Answer';
import Empty from '../../components/Cards/Empty/Empty';
// import * as actions from '../../store/actions/index';

class Cards extends Component {
    state = {
        Night: {
            Header: '#263238',
            Main: '#455a64',
            CardAction: '#263238',
            Text: 'white',
            Menu: '#37474f',
            Delete: '#f50057',
            Edit: 'white',
        },
        Day: {
            Header: '#64b5f6',
            Main: 'white',
            CardAction: '#fffde7',
            Text: '#263238',
            Menu: 'white',
            Delete: '#f50057',
            Edit: '#90a4ae',
        },
        Icon: 'star_border_icon',
        Questions: [],
        Question: '',
        Answers: [],
        Answer: '',
        Empty: false,
        AnswerOpen: false,
        Course: '',
        Lesson: '',
        Counter: 0,
        Ids: [],
        Block: {}
    }

    componentDidMount() {
        if (this.props.Block === null) {
            return <Redirect to={'/'} />
        }
        const block = this.props.Block;
        const course = this.props.Course;
        const lesson = this.props.Lesson;
        let ids = [];
        let questions = [];
        let answers = [];
        Object.keys(block).map(id => {
            let card = block[parseInt(id)];
            return (
                ids.push(parseInt(id))
                &
                questions.push(card.question)
                &
                answers.push(card.answer)
            )
        });
        this.setState({
            Block: block,
            Course: course,
            Lesson: lesson,
            Ids: ids,
            Questions: questions,
            Answers: answers,
            Question: questions[0],
            Answer: answers[0]
        });
        // favIcon, question, answer, box,
    }

    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio ullam fugiat natus recusandae voluptatum repellat odit esse obcaecati, eos minus placeat dicta provident ea distinctio officiis est inventore dolores.

    favoriteClickHandler = () => {
        const icon = this.state.Icon;
        icon === 'star_icon' ?
            this.setState({
                Icon: 'star_border_icon'
            }) :
            this.setState({
                Icon: 'star_icon'
            });
    }

    closePageHandler = () => {
        this.props.history.push('/');
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
        let counter = this.state.Counter;
        const ids = this.state.Ids;
        const block = this.state.Block;
        const cardNumber = ids[counter];
        const card = block[cardNumber];
        card.box = 1;
        block[cardNumber] = card;
        const questions = this.state.Questions;
        const answers = this.state.Answers;
        counter++;
        if (counter < questions.length) {
            this.setState({
                AnswerOpen: false,
                Question: questions[counter],
                Counter: counter,
                Block: block
            });
            setTimeout(() => {
                this.setState({
                    Answer: answers[counter]
                });
            }, 350);
        } else {
            this.setState({
                Empty: true
            });
        }
    }

    trueAnswerHandler = () => {
        let counter = this.state.Counter;
        const ids = this.state.Ids;
        const block = this.state.Block;
        const cardNumber = ids[counter];
        const card = block[cardNumber];
        if ( card.box < 5) {
            card.box++;
        } else {
            card.box = 5;
        }
        block[cardNumber] = card;
        const questions = this.state.Questions;
        const answers = this.state.Answers;
        counter++;
        if (counter < questions.length) {
            this.setState({
                AnswerOpen: false,
                Question: questions[counter],
                Counter: counter,
                Block: block
            });
            setTimeout(() => {
                this.setState({
                    Answer: answers[counter]
                });
            }, 350);
        } else {
            this.setState({
                Empty: true
            });
        }
    }

    render() {

        if (this.props.Block === null) {
            return <Redirect to={'/'} />
        }

        let empty = this.state.Empty;

        let content = empty === false ?
            <Fragment>
                <Question clickedFav={this.favoriteClickHandler} childrenFav={this.state.Icon}
                    clickedClose={this.closePageHandler} content={this.state.Question}
                    clickedAnswer={this.answerHandler}
                />
                <Answer openAnswer={this.state.AnswerOpen} closeAnswer={this.closeAnswerHandler}
                    clickedFalse={this.falseAnswerHandler} clickedTrue={this.trueAnswerHandler}
                    answer={this.state.Answer}
                />
            </Fragment> :
            <Empty clickedClose={this.closePageHandler} />;

        return (
            content
        );
    }
}

const mapStateToProps = state => {
    return {
        Block: state.Cards.Block,
        Course: state.Cards.Course,
        Lesson: state.Cards.Lesson,
        Favorite: state.Cards.Favorite
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);