// Core
import { combineReducers } from 'redux';

// Reducers
import { uiReducer as ui } from '../redux/ui/reducer';
import { tasksReducer as tasks } from '../redux/tasks/reducer';

export const rootReducer = combineReducers({
    ui,
    tasks,
});

