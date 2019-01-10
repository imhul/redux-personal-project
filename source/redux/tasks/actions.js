// Types
import { types } from './types';

export const tasksActions = {

    // Sync
    fillTasks: (tasks) => {
        return {
            type: types.FILL_TASKS,
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
    confirmTask: (taskId) => {
        return {
            type: types.CONFIRM_TASK,
            payload: taskId
        }
    },
    confirmAll: (tasks) => {
        return {
            type: types.CONFIRM_TASKS,
            payload: tasks
        }
    },
    starTask: (taskId) => {
        return {
            type: types.STAR_TASK,
            payload: taskId
        }
    },
    unstarTask: (taskId) => {
        return {
            type: types.UNSTAR_TASK,
            payload: taskId
        }
    },

    // Async
    fillTasksAsync: (tasks) => {
        return {
            type: types.FILL_TASKS_ASYNC,
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
    confirmTaskAsync: (taskId) => {
        return {
            type: types.CONFIRM_TASK_ASYNC,
            payload: taskId
        }
    },
    confirmAllAsync: (tasks) => {
        return {
            type: types.CONFIRM_TASKS_ASYNC,
            payload: tasks
        }
    },
    starTaskAsync: (taskId) => {
        return {
            type: types.STAR_TASK_ASYNC,
            payload: taskId
        }
    },
    unstarTaskAsync: (taskId) => {
        return {
            type: types.UNSTAR_TASK_ASYNC,
            payload: taskId
        }
    },
}