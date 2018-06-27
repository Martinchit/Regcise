import * as actionTypes from './actionTypes';

export const clearLog = () => {
    return {
        type: actionTypes.CLEAR_EXERCISE_LOG
    };
};

export const removeLog = (id) => {
    return {
        type: actionTypes.REMOVE_EXERCISE_LOG,
        logId: id
    };
};

export const addLog = (exercise, weight, repetitiion, set) => {
    return {
        type: actionTypes.ADD_EXERCISE_LOG,
        exercise: exercise,
        weight: weight,
        repetitiion: repetitiion,
        set: set
    };
};