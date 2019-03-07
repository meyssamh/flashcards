import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import QaA from '../../components/Edit/Main/QaA/QaA';
import Main from '../../components/Edit/Main/Main';
import AddCard from '../../components/Edit/Main/AddCard/AddCard';
import EditCard from '../../components/Edit/Main/EditCard/EditCard';
import DeleteCard from '../../components/Edit/Main/DeleteCard/DeleteCard';
import * as actions from '../../store/actions/index';

class Edit extends Component {
    state = {
        Night: {
            Button: 'white',
            Main: '#455a64',
            Card: '#263238',
            Text: 'white',
            Menu: '#37474f',
            Delete: '#f50057',
            Edit: 'white',
            NightButton: '#263238'
            
        },
        Day: {
            Button: '#263238',
            Main: 'white',
            Card: '#fffde7',
            Text: '#263238',
            Menu: 'white',
            Delete: '#f50057',
            Edit: '#90a4ae',
            NightButton: 'gold'
        },
        Id: 0,
        Question: '',
        Answer: '',
        Delete: false,
        Edit: false,
        Add: false
    }

    clickedAddHandler = () => {
        this.setState({
            Add: true
        });
    }

    addCardHandler = () => {
        const question = this.state.Question;
        const answer = this.state.Answer;
        const course = this.props.Course;
        const lessonName = this.props.LessonName;
        this.props.onAddEdit(course, lessonName, question, answer);
        this.props.onAddCard(question, answer);
        this.setState({
            Add: false,
            Question: '',
            Answer: ''
        });
    }

    addCloseHandler = () => {
        this.setState({
            Add: false,
            Question: '',
            Answer: ''
        });
    }

    clickedEditHandler = (Id) => {
        const lesson = this.props.Lesson;
        const card = lesson[Id];
        const question = card.question;
        const answer = card.answer;
        this.setState({
            Id: Id,
            Question: question,
            Answer: answer,
            Edit: true
        });
    }

    changeQuestionHandler = (e) => {
        this.setState({
            Question: e.currentTarget.value
        });
    }

    changeAnswerHandler = (e) => {
        this.setState({
            Answer: e.currentTarget.value
        });
    }

    editCardHandler = () => {
        const id = parseInt(this.state.Id);
        const question = this.state.Question;
        const answer = this.state.Answer;
        this.props.onEditCard(id, question, answer);
        this.setState({
            Id: 0,
            Edit: false,
            Question: '',
            Answer: ''
        });
    }

    editCloseHandler = () => {
        this.setState({
            Id: 0,
            Edit: false,
            Question: '',
            Answer: ''
        });
    }

    clickedDeleteHandler = (Id) => {
        this.setState({
            Id: Id,
            Delete: true
        });
    }

    deleteCardHandler = () => {
        const id = this.state.Id;
        this.props.onDeleteCard(id);
        this.setState({
            Id: 0,
            Delete: false
        });
    }

    deleteCloseHandler = () => {
        this.setState({
            Id: 0,
            Delete: false
        });
    }

    closePageHandler = () => {
        const lessons = this.props.Lessons;
        this.props.history.push('/library');
        this.props.onPostData(lessons);
    }

    render() {

        if (this.props.Lesson === null) {
            return <Redirect to={'/'} />
        }

        const nightIcon = this.props.NightMode ? 'brightness_3_icon' : 'wb_sunny_icon';

        const lesson = this.props.Lesson;

        let nightMode = this.props.NightMode; // to check for the night mode

        let day = this.state.Day;

        let night = this.state.Night;

        let mode = nightMode ? night : day;

        let counter = 0;

        let cards = Object.keys(lesson).map(Id => {
            ++counter;
            let card = lesson[Id];
            return <QaA clickedEdit={() => this.clickedEditHandler(Id)} key={Id} answer={card.answer}
                clickedDelete={() => this.clickedDeleteHandler(Id)} question={card.question} counter={counter}
                card={mode.Card} button={mode.Button} text={mode.Text} edit={mode.Edit} del={mode.Delete}
            />
        });

        return (
            <Fragment>
                <Main nightOrDay={nightIcon} clickedNight={this.props.onNightMode} cards={cards}
                    clickedClose={this.closePageHandler} clickedAdd={this.clickedAddHandler}
                    main={mode.Main} text={mode.Text} button={mode.Button} nightButton={mode.NightButton}
                />
                <AddCard open={this.state.Add} close={this.addCloseHandler}
                    questionValue={this.state.Question} answerValue={this.state.Answer}
                    changedQuestion={this.changeQuestionHandler} changedAnswer={this.changeAnswerHandler}
                    clickedAdd={this.addCardHandler}
                />
                <DeleteCard open={this.state.Delete} close={this.deleteCloseHandler}
                    clickedDelete={this.deleteCardHandler}
                />
                <EditCard open={this.state.Edit} close={this.editCloseHandler}
                    questionValue={this.state.Question} answerValue={this.state.Answer}
                    changedQuestion={this.changeQuestionHandler} changedAnswer={this.changeAnswerHandler}
                    clickedEdit={this.editCardHandler}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        Lessons: state.Library.Lessons,
        Lesson: state.Edit.Lesson,
        NightMode: state.Library.NightMode,
        Course: state.Edit.Course,
        LessonName: state.Edit.LessonName,
        Count: state.Edit.Count
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCard: (question, answer) => dispatch(actions.addCard(question, answer)),
        onEditCard: (id, question, answer) => dispatch(actions.editCard(id, question, answer)),
        onDeleteCard: (id) => dispatch(actions.deleteCard(id)),
        onNightMode: () => dispatch(actions.nightMode()),
        onAddEdit: (course, lessonName, question, answer) =>
            dispatch(actions.addEdit(course, lessonName, question, answer)),
        onPostData: (lessons) => dispatch(actions.postData(lessons))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);