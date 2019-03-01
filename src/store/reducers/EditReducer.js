import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Lesson: null
}

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_EDIT:
            return {
                Lesson: action.lesson
            };
        default:
            return state;
    }
}

export default editReducer;