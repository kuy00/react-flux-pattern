import status from '../../constants/todoStatus';

// Action Types
const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';

// Action Creators
export const add = (payload) => {
  return { type: ADD, payload };
};

export const remove = () => {
  return { type: REMOVE };
};

// Initial State
const initialState = {
  todos: [
    {
      id: 1,
      name: '1일 1커밋',
      status: status.PROCESSING,
    },
  ],
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        todos: state.todos.concat(
          {
            id: (state.todos.length + 1),
            ...payload,
          }
        ),
      };
    case REMOVE:
      state.todos.pop();
      return {
        ...state,
        todos: state.todos,
      };
    default:
      return state;
  }
}
export default reducer;
