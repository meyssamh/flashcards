import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Block: null,
    Course: '',
    Lesson: '',
    Favorite: false
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_BOX:
            return {
                ...state,
                Block: action.block,
                Course: action.course,
                Lesson: action.lesson
            };
        default:
            return state;
    }
}

export default cardsReducer;