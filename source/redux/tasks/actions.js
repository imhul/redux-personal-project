// Types
import { types } from './types';

export const tasksActions = {

    // Sync
    fetchTasks: (tasks) => {
        return {
            type: types.FETCH_TASKS,
            payload: tasks
        }
    },
    createTask: (task) => {
        return {
            type: types.CREATE_TASK,
            payload: task
        }
    },
    removeTask: (taskId) => {
        return {
            type: types.REMOVE_TASK,
            payload: taskId
        }
    },
    updateTask: (taskId) => {
        return {
            type: types.UPDATE_TASK,
            payload: taskId
        }
    },
    completeTask: (taskId) => {
        return {
            type: types.COMPLETE_TASK,
            payload: taskId
        }
    },
    completeAll: (tasks) => {
        return {
            type: types.COMPLETE_TASKS,
            payload: tasks
        }
    },
    favoriteTask: (taskId) => {
        return {
            type: types.FAVORITE_TASK,
            payload: taskId
        }
    },
    unfavoriteTask: (taskId) => {
        return {
            type: types.UNFAVORITE_TASK,
            payload: taskId
        }
    },

    // Async
    fetchTasksAsync: (tasks) => {
        return {
            type: types.FETCH_TASKS_ASYNC,
            payload: tasks
        }
    },
    createTaskAsync: (task) => {
        return {
            type: types.CREATE_TASK_ASYNC,
            payload: task
        }
    },
    removeTaskAsync: (taskId) => {
        return {
            type: types.REMOVE_TASK_ASYNC,
            payload: taskId
        }
    },
    updateTaskAsync: (taskId) => {
        return {
            type: types.UPDATE_TASK_ASYNC,
            payload: taskId
        }
    },
    completeTaskAsync: (taskId) => {
        return {
            type: types.COMPLETE_TASK_ASYNC,
            payload: taskId
        }
    },
    completeAllAsync: (tasks) => {
        return {
            type: types.COMPLETE_TASKS_ASYNC,
            payload: tasks
        }
    },
    favoriteTaskAsync: (taskId) => {
        return {
            type: types.FAVORITE_TASK_ASYNC,
            payload: taskId
        }
    },
    unfavoriteTaskAsync: (taskId) => {
        return {
            type: types.UNFAVORITE_TASK_ASYNC,
            payload: taskId
        }
    },
};