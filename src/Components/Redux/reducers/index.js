const initialState = { todos: [] };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: action.payload
            }
        case "MARKED_COMPLETED":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}
export default reducer;