// import actions from "./actions";

const initState = {
    todos: []
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: ""
            };
        default:
            return state;
    }
};