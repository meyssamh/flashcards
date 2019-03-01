import * as actionTypes from './actionTypes';

export const initEdit = (lesson) => {
    return {
        type: actionTypes.INIT_EDIT,
        lesson: lesson
    }
}