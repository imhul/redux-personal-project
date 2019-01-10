// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* completeTask({ payload: taskId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.update, [ taskId ]);

        if( response.status !== 200 ) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(tasksActions.completeTask({ taskId }));

    } catch (error) {
        yield put(uiActions.emitError("complete task worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
