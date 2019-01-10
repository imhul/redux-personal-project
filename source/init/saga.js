// Core
import { call } from 'redux-saga/effects';

// Watcher
import { watchTasks } from '../redux/tasks/saga/watcher';

export function* saga() {
    yield call(watchTasks);
};