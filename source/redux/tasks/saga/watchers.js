// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { 
    fetchTasks, 
    createTask, 
    editTask,
    removeTask,
    completeTask, 
    completeAll, 
    favoriteTask, 
    unfavoriteTask 
} from './workers';

function* watchFetchTasks() {
    yield takeEvery( types.FETCH_TASKS_ASYNC, fetchTasks )
};

function* watchCreateTask() {
    yield takeEvery( types.CREATE_TASK_ASYNC, createTask )
};

function* watchEditTask() {
    yield takeEvery( types.UPDATE_TASK_ASYNC, editTask )
};

function* watchRemoveTask() {
    yield takeEvery( types.REMOVE_TASK_ASYNC, removeTask )
};

function* watchCompleteTask() {
    yield takeEvery( types.COMPLETE_TASK_ASYNC, completeTask )
};

function* watchCompleteAll() {
    yield takeEvery( types.COMPLETE_TASKS_ASYNC, completeAll )
};

function* watchFavoriteTask() {
    yield takeEvery( types.FAVORITE_TASK_ASYNC, favoriteTask )
};

function* watchUnfavoriteTask() {
    yield takeEvery( types.UNFAVORITE_TASK_ASYNC, unfavoriteTask )
};

export function* watchTasks() {
    yield all(
        [ 
            call(watchFetchTasks), 
            call(watchCreateTask), 
            call(watchEditTask), 
            call(watchRemoveTask), 
            call(watchCompleteTask), 
            call(watchCompleteAll),
            call(watchFavoriteTask),
            call(watchUnfavoriteTask),
        ]
    );
};