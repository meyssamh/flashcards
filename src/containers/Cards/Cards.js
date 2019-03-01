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
        Boxes: [],
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
        Favorites: [],
        Favorite: false,
        Empty: false,
        AnswerOpen: false,
        Course: '',
        Lesson: '',
        Counter: 0,
        Ids: [],
        Block: {}
    }

    componentDidMount() {
        const block = this.props.Block;
        if (block === null) {
            return <Redirect to={'/'} />
        }
        const course = this.props.Course;
        const lesson = this.props.Lesson;
        let ids = [];
        let questions = [];
        let answers = [];
        let favorites = [];
        let boxes = [];
        Object.keys(block).map(id => {
            let card = block[parseInt(id)];
            return (
                ids.push(parseInt(id))
                &
                boxes.push(card.box)
                &
                questions.push(card.question)
                &
                answers.push(card.answer)
                &
                favorites.push(card.favorite)
            )
        });
        if (favorites[0]) {
            this.setState({
                Boxes: boxes,
                Block: block,
                Course: course,
                Lesson: lesson,
                Ids: ids,
                Icon: 'star_icon',
                Questions: questions,
                Answers: answers,
                Favorites: favorites,
                Favorite: favorites[0],
                Question: questions[0],
                Answer: answers[0]
            });
        } else {
            this.setState({
                Block: block,
                Course: course,
                Lesson: lesson,
                Ids: ids,
                Icon: 'star_border_icon',
                Questions: questions,
                Answers: answers,
                Favorites: favorites,
                Favorite: favorites[0],
                Question: questions[0],
                Answer: answers[0]
            });
        }

    }

    // Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio ullam fugiat natus recusandae voluptatum repellat odit esse obcaecati, eos minus placeat dicta provident ea distinctio officiis est inventore dolores.

    favoriteClickHandler = () => {
        const counter = this.state.Counter;
        const ids = this.state.Ids;
        const block = this.state.Block;
        const favorites = this.state.Favorites;
        let favorite = this.state.Favorite;
        const cardNumber = ids[counter];
        const card = block[cardNumber];
        card.favorite = !card.favorite;
        block[cardNumber] = card;
        favorites[counter] = !favorites[counter];
        favorite = !favorite;
        favorite ?
            this.setState({
                Icon: 'star_icon',
                Favorites: favorites,
                Favorite: favorite,
                Block: block
            }) :
            this.setState({
                Icon: 'star_border_icon',
                Favorites: favorites,
                Favorite: favorite,
                Block: block
            });
    }

    closePageHandler = () => {
        const lessons = this.props.Lessons;
        console.log('closed')
        this.props.history.push('/');
        this.props.onPostData(lessons)
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
        card.box = 1; // placing the card in the first box
        block[cardNumber] = card;
        const favorites = this.state.Favorites;
        let favorite = this.state.Favorite;
        const questions = this.state.Questions;
        const answers = this.state.Answers;
        counter++;
        favorite = favorites[counter];
        if (counter < questions.length && favorite) {
            this.setState({
                Icon: 'star_icon',
                Favorite: favorite,
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
        } else if (counter < questions.length) {
            this.setState({
                Icon: 'star_border_icon',
                Favorite: favorite,
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
        if (card.box < 5) { // not letting cards go farther than last box
            card.box++;
        } else {
            card.box = 5;
        }
        block[cardNumber] = card;
        const favorites = this.state.Favorites;
        let favorite = this.state.Favorite;
        const questions = this.state.Questions;
        const answers = this.state.Answers;
        counter++;
        favorite = favorites[counter];
        if (counter < questions.length && favorite) {
            this.setState({
                Icon: 'star_icon',
                Favorite: favorite,
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
        } else if (counter < questions.length) {
            this.setState({
                Icon: 'star_border_icon',
                Favorite: favorite,
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

    box0AnswerHandler = () => {
        let counter = this.state.Counter;
        const ids = this.state.Ids;
        const block = this.state.Block;
        const cardNumber = ids[counter];
        const card = block[cardNumber];
        card.box = 1; // placing the card in the first box
        block[cardNumber] = card;
        const favorites = this.state.Favorites;
        let favorite = this.state.Favorite;
        const questions = this.state.Questions;
        const answers = this.state.Answers;
        counter++;
        favorite = favorites[counter];
        if (counter < questions.length && favorite) {
            this.setState({
                Icon: 'star_icon',
                Favorite: favorite,
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
        } else if (counter < questions.length) {
            this.setState({
                Icon: 'star_border_icon',
                Favorite: favorite,
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

        const boxes = this.state.Boxes;

        const counter = this.state.Counter;

        // let nightMode = this.props.NightMode; // to check for the night mode

        // let day = this.state.Day;

        // let night = this.state.Night;

        // let mode = nightMode ? night : day;

        let empty = this.state.Empty; // to show message after all cards are done

        let content = empty === false ?
            <Fragment>
                <Question clickedFav={this.favoriteClickHandler} childrenFav={this.state.Icon}
                    clickedClose={this.closePageHandler} content={this.state.Question}
                    clickedAnswer={this.answerHandler}
                />
                {boxes[counter] === 0 ?
                    <Answer0 openAnswer={this.state.AnswerOpen} closeAnswer={this.closeAnswerHandler}
                        clicked={this.box0AnswerHandler} answer={this.state.Answer}
                    /> :
                    <Answer openAnswer={this.state.AnswerOpen} closeAnswer={this.closeAnswerHandler}
                        clickedFalse={this.falseAnswerHandler} clickedTrue={this.trueAnswerHandler}
                        answer={this.state.Answer}
                    />}
            </Fragment> :
            <Empty clickedClose={this.closePageHandler} />;

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
        NightMode: state.Library.NightMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostData: (lessons) => dispatch(actions.postData(lessons))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);