import { ADD_TODO, DELETE_TODO } from './actionType';
export const addTodo = (id, text) => {
    return {
        type: ADD_TODO,
        payload: {
            id,
            text
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}