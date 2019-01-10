// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* completeAll() {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.update);

        if( response.status !== 200 ) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(tasksActions.completeAll());

    } catch (error) {
        yield put(uiActions.emitError("complete all worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
