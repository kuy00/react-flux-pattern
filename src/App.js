import React, { useReducer } from 'react';
import todoReducer from './reducers/todo';
import AddTodo from './components/AddTodo';
import DeleteTodo from './components/DeleteTodo';
import TodoItem from './components/TodoItem';
import todo from './constants/todoStatus';

const App = () => {
  const initialState = {
    todos: [
      {
        id: 1,
        name: '1일 1커밋',
        status: todo.PROCESSING,
      },
    ],
  };  
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',          
        }}>
        {
          state.todos.map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} />
            )
          })
        }
      </div>
      <div>
        <AddTodo dispatch={dispatch} />
        <DeleteTodo dispatch={dispatch} />
      </div>      
    </div>
  );
}
export default App;
