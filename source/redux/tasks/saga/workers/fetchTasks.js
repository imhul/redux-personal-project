// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts() {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if( response.status !== 200 ) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));

    } catch (error) {
        yield put(uiActions.emitError("fetch posts worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }

}