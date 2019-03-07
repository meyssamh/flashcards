import * as actionTypes from './actionTypes';

export const initEdit = (lesson, course, lessonName, count) => {
    return {
        type: actionTypes.INIT_EDIT,
        lesson: lesson,
        course: course,
        lessonName: lessonName,
        count: count
    }
}

export const addCard = (question, answer) => {
    return {
        type: actionTypes.ADD_CARD,
        question: question,
        answer: answer
    }
}

export const editCard = (id, question, answer) => {
    return {
        type: actionTypes.EDIT_CARD,
        id: id,
        question: question,
        answer: answer
    }
}

export const deleteCard = (id) => {
    return {
        type: actionTypes.DELETE_CARD,
        id: id
    }
}