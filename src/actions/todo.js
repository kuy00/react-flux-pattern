// action types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// action creators
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = () => {
  return { type: DELETE_TODO };
};
