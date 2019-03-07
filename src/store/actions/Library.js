import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const nightMode = () => {
    return {
        type: actionTypes.NIGHT_MODE
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

export const fetchDataStart = () => {
    return dispatch => {
        axios.get('/Lessons')
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            }
            ).catch(error => {
                dispatch(fetchDataFail(error));
                console.log(error.message);
            }
            );
    }
}

export const addCourse = (course) => {
    return {
        type: actionTypes.ADD_COURSE,
        course: course
    }
}

export const deleteCourse = (course) => {
    return {
        type: actionTypes.DELETE_COURSE,
        course: course
    }
}

export const addLesson = (course, lesson) => {
    return {
        type: actionTypes.ADD_LESSON,
        course: course,
        lesson: lesson
    }
}

export const deleteLesson = (course, lesson) => {
    return {
        type: actionTypes.DELETE_LESSON,
        course: course,
        lesson: lesson
    }
}

export const postDataSuccess = (lessons) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        lessons: lessons
    }
}

export const postDataFail = (error) => {
    return {
        type: actionTypes.POST_DATA_FAIL,
        error: error
    }
}

export const postData = (lessons) => {
    return dispatch => {
        const Lessons = lessons;
        axios.post('/Lessons', Lessons)
        .then(response => {
            dispatch(postDataSuccess(lessons));
            console.log('Post Successful', response.status);
        }
        ).catch(error => {
            dispatch(postDataFail(error.message));
            console.log(error.message);
        }
        );
    }
}

export const addEdit = (course, lessonName, question, answer) => {
    return {
        type: actionTypes.ADD_EDIT,
        course: course,
        lessonName: lessonName,
        question: question,
        answer: answer
    }
}