// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* createPost({ payload: comment }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.create, [comment]);
        const { data: task, message } = yield apply(response, response.json);

        if( response.status !== 200 ) {
            throw new Error(message);
        }

        yield put(tasksActions.createTask( task ));

    } catch (error) {
        yield put(uiActions.emitError("create task worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }

}