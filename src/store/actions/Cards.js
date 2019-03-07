import * as actionTypes from './actionTypes';

export const initBox = (block, course, lesson) => {
    return {
        type: actionTypes.INIT_BOX,
        block: block,
        course: course,
        lesson: lesson
    }
}

export const trueAnswer = () => {
    return {
        type: actionTypes.TRUE_ANSWER
    }
}

export const falseAnswer = () => {
    return {
        type: actionTypes.FALSE_ANSWER
    }
}

export const box0Answer = () => {
    return {
        type: actionTypes.BOX_0_ANSWER
    }
}

export const favorite = () => {
    return {
        type: actionTypes.FAVORITE
    }
}