const todo = (state, action) => {
  const { type, payload } = action;

  console.log(type);

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
      console.log(state.todos);
      return {
        ...state,
        todos: state.todos,
      };
    default:
      return state;
  }
}
export default todo;
