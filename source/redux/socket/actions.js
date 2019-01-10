// Actions
import { socket } from '../../init/socket';
import { tasksActions } from '../../redux/tasks/actions';


export const socketActions = {
    listenTasks: () => (dispatch, getState) => {

        socket.on('create', (event) => {
            const { data: task } = JSON.parse(event);
            dispatch(tasksActions.createTask(task));
        });

        socket.on('remove', (event) => {
            const { data: task } = JSON.parse(event);
            dispatch(tasksActions.removeTask(task));
        });

        socket.on('like', (event) => {
            const { data, meta } = JSON.parse(event);

            if (meta.action === 'like') {
                dispatch(
                    tasksActions.favoriteTask({
                        taskId: data.taskId,
                    })
                );
            } else {
                dispatch(tasksActions.unfavoriteTask(data));
            }
        });
    },
};
