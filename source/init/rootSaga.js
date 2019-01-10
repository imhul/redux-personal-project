// Core
import { call } from 'redux-saga/effects';

// Watcher
import { watchTasks } from '../redux/tasks/saga/watchers';

export function* rootSaga() {
    yield call(watchTasks);
};