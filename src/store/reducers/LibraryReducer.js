import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Lessons: {},
    NightMode: false,
    Loading: true,
    Error: ''
};

const addEdit = (state, action) => {
    const lessons = state.Lessons;
    const course = action.course;
    const lessonName = action.lessonName;
    const myCourse = lessons[course];
    const myLesson = myCourse[lessonName];
    let count = Object.keys(myLesson).length;
    let number = Object.keys(myLesson);
    let index = parseInt(number[count - 1]);
    index++;
    const question = action.question;
    const answer = action.answer;
    const newLesson = {
        ...myLesson,
        [index]: {
            box: 0,
            type: 0,
            favorite: false,
            question: question,
            answer: answer,
            picture: ''
        }
    };
    myCourse[lessonName] = newLesson;
    lessons[course] = myCourse;
    return {
        ...state,
        Lessons: lessons
    }
}

const reducer = (state = initialState, action) => {
    const lessons = state.Lessons;
    const course = action.course;
    const lesson = action.lesson;
    switch (action.type) {
        case actionTypes.NIGHT_MODE:
            return {
                ...state,
                NightMode: !state.NightMode
            };
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                Lessons: action.data,
                Loading: false
            };
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                Error: action.error.message,
                Loading: false
            };
        case actionTypes.POST_DATA:
            return {
                ...state
            }
        case actionTypes.POST_DATA_SUCCESS:
            return {
                ...state,
                Lessons: action.lessons,
                Error: ''
            }
        case actionTypes.POST_DATA_FAIL:
            return {
                ...state,
                Error: action.error.message
            }
        case actionTypes.ADD_COURSE:
            return {
                ...state,
                Lessons: {
                    ...lessons,
                    [course]: {}
                }
            };
        case actionTypes.DELETE_COURSE:
            delete lessons[course];
            return {
                ...state,
                Lessons: lessons
            };
        case actionTypes.ADD_LESSON:
            const newLessons = {
                ...lessons[course], [lesson]: {
                    count: 0,
                    cards: {}
                }
            };
            lessons[course] = newLessons;
            return {
                ...state,
                Lessons: lessons
            };
        case actionTypes.DELETE_LESSON:
            const new_Lessons = lessons[course];
            delete new_Lessons[lesson];
            lessons[course] = new_Lessons;
            return {
                ...state,
                Lessons: lessons
            };
        case actionTypes.ADD_EDIT: return addEdit(state, action);
        default:
            return state;
    }
};

export default reducer;