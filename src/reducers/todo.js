const todo = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(
          {
            id: (state.todos.length + 1),
            ...payload,
          }
        ),
      };
    case 'DELETE_TODO':
      state.todos.pop();
      return {
        ...state,
        todos: state.todos,
      };
    default:
      return state;
  }
}
export default todo;
