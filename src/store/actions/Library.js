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

export const addCourse = (courseName) => {
    return {
        type: actionTypes.ADD_COURSE,
        courseName: courseName
    }
}

export const deleteCourse = (courseName) => {
    return {
        type: actionTypes.DELETE_COURSE,
        courseName: courseName
    }
}

export const addLesson = (courseName, lessonName) => {
    return {
        type: actionTypes.ADD_LESSON,
        courseName: courseName,
        lessonName: lessonName
    }
}

export const deleteLesson = (courseName, lessonName) => {
    return {
        type: actionTypes.DELETE_LESSON,
        courseName: courseName,
        lessonName: lessonName
    }
}