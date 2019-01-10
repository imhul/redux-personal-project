// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { 
    fetchTasks, 
    createTask, 
    updateTask,
    removeTask,
    confirmTask, 
    confirmAll, 
    starTask, 
    unstarTask 
} from './workers';

function* watchFetchTasks() {
    yield takeEvery( types.FILL_TASKS_ASYNC, fetchTasks )
};

function* watchCreateTask() {
    yield takeEvery( types.CREATE_TASK_ASYNC, createTask )
};

function* watchUpdateTask() {
    yield takeEvery( types.UPDATE_TASK_ASYNC, updateTask )
};

function* watchRemoveTask() {
    yield takeEvery( types.REMOVE_TASK_ASYNC, removeTask )
};

function* watchConfirmTask() {
    yield takeEvery( types.CONFIRM_TASK_ASYNC, confirmTask )
};

function* watchConfirmAll() {
    yield takeEvery( types.CONFIRM_TASKS_ASYNC, confirmAll )
};

function* watchStarTask() {
    yield takeEvery( types.STAR_TASK_ASYNC, starTask )
};

function* watchUnstarTask() {
    yield takeEvery( types.UNSTAR_TASK_ASYNC, unstarTask )
};

export function* watchTasks() {
    yield all(
        [ 
            call(watchFetchTasks), 
            call(watchCreateTask), 
            call(watchUpdateTask), 
            call(watchRemoveTask), 
            call(watchConfirmTask), 
            call(watchConfirmAll),
            call(watchStarTask),
            call(watchUnstarTask),
        ]
    );
};