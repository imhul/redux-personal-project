// Instruments
import { MAIN_URL } from './config';

// API
export const api = {
    get token() {
        return localStorage.getItem('token');
    },
    fetch() {
        return fetch(`${MAIN_URL}`, {
            method: 'GET',
            headers: {
                Authorization: this.token,
            },
        })
    },
    create(task) {
        return fetch(`${MAIN_URL}`, {
            method: 'POST',
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        });
    },
    remove(taskId) {
        return fetch(`${MAIN_URL}/${taskId}`, {
            method: 'DELETE',
            headers: {
                Authorization: this.token,
            },
        });
    },
    update(taskId) {
        return fetch(`${MAIN_URL}`, {
            method: 'PUT',
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskId }),
        });
    },
};
