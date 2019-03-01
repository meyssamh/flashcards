import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Lessons: {},
    NightMode: false,
    Loading: true,
    Error: ''
};

const reducer = (state = initialState, action) => {
    const lessons = { ...state.Lessons };
    const course = action.courseName;
    const lesson = action.lessonName;
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
            const new_Lessons = { ...lessons[course] };
            delete new_Lessons[lesson];
            lessons[course] = new_Lessons;
            return {
                ...state,
                Lessons: lessons
            };
        default:
            return state;
    }
};

export default reducer;