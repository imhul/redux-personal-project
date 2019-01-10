// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* fetchTasks() {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.fetch);
        const { data: tasks, message } = yield apply(response, response.json);

        if( response.status !== 200 ) {
            throw new Error(message);
        }

        yield put(tasksActions.fetchTasks( tasks ));

    } catch (error) {
        yield put(uiActions.emitError("fetch tasks worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }

}