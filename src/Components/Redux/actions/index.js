import { ADD_TODO, DELETE_TODO } from "./actionType";

export const addTodo = (id, text, isCompleted) => {
    return {
        type: ADD_TODO,
        payload: {
            id,
            text,
            isCompleted
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

// export const markedCompleted = (id) => {
//     return {
//         type: MARKED_COMPLETED,
//         payload: id
//     }
// }