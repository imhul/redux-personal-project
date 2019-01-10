// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from './types';

const initialState = List();

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TASKS:
            return fromJS(action.payload);

        case types.CREATE_TASK:
            return state.unshift(fromJS(action.payload));

        case types.UPDATE_TASK:
            return fromJS(action.payload);

        case types.REMOVE_TASK:
            return state.filter(task => task.get('id') !== action.payload);

        case types.CONFIRM_TASK:
            return state.updateIn(
                [
                    state.findIndex((task) => {
                        return task.get('id') === action.payload.taskId
                    }),
                    'likes'
                ],
                (likes) => {
                    return likes.unshift(action.payload.liker)
                }
            );

        case types.CONFIRM_TASKS:
            return state.updateIn(
                [
                    state.findIndex((task) => {
                        return task.get('id') === action.payload.taskId
                    }),
                    'likes'
                ],
                (likes) => {
                    return likes.filter(like => like.get('id') !== action.payload.liker.get('id'));
                }
            );

        case types.STAR_TASK:
            return state.updateIn(
                [
                    state.findIndex((task) => {
                        return task.get('id') === action.payload.taskId
                    }),
                    'likes'
                ],
                (likes) => {
                    return likes.filter(like => like.get('id') !== action.payload.liker.get('id'));
                }
            );

        case types.UNSTAR_TASK:
            return state.updateIn(
                [
                    state.findIndex((task) => {
                        return task.get('id') === action.payload.taskId
                    }),
                    'likes'
                ],
                (likes) => {
                    return likes.unshift(action.payload.liker)
                }
            );

        default:
            return state;
    }
};