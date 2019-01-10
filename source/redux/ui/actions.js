// Types
import {types} from '../tasks/types';

export const uiActions = {
    startFetching: () => {
        return {
            type: types.FAVORITET_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    emitError: (error, message) => {
        return {
            type: types.ERROR,
            payload: message,
        }
    },
};