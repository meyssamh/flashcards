import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Lesson: null,
    Course: '',
    LessonName: ''
}

const initEdit = (state, action) => {
    const lesson = action.lesson;
    const course = action.course;
    const lessonName = action.lessonName;
    return {
        Lesson: lesson,
        Course: course,
        LessonName: lessonName
    };
}

const addCard = (state, action) => {
    const lesson = state.Lesson;
    let count = Object.keys(lesson).length;
    let number = Object.keys(lesson);
    let index = parseInt(number[count - 1]);
    index++;
    const question = action.question;
    const answer = action.answer;
    return {
        ...state,
        Lesson: {
            ...lesson,
            [index]: {
                box: 0,
                type: 0,
                favorite: false,
                question: question,
                answer: answer,
                picture: ''
            }
        }
    };
}

const editCard = (state, action) => {
    const lesson = state.Lesson;
    const id = action.id;
    const card = lesson[id];
    const question = action.question;
    const answer = action.answer;
    card.question = question;
    card.answer = answer;
    return {
        ...state,
        Lesson: lesson
    };
}

const deleteCard = (state, action) => {
    const lesson = state.Lesson;
    const id = action.id;
    delete lesson[id];
    return {
        ...state,
        Lesson: lesson
    };
}

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_EDIT: return initEdit(state, action);
        case actionTypes.ADD_CARD: return addCard(state, action);
        case actionTypes.EDIT_CARD: return editCard(state, action);
        case actionTypes.DELETE_CARD: return deleteCard(state, action);
        default:
            return state;
    }
}

export default editReducer;