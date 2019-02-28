import * as actionTypes from './actionTypes';

export const initBox = (block, course, lesson) => {
    return {
        type: actionTypes.INIT_BOX,
        block: block,
        course: course,
        lesson: lesson
    }
}