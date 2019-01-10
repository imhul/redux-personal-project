// Core
import { put, apply, select } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../../tasks/actions';
import { uiActions } from '../../../ui/actions';

export function* removePost({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.remove, [postId]);

        if( response.status !== 204 ) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(postsActions.removePost(postId));

    } catch (error) {
        yield put(uiActions.emitError("remove post worker error", error));
    } finally {
        yield put(uiActions.stopFetching());
    }

}