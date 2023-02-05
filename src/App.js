import React from 'react';
import AddTodo from './components/AddTodo';
import DeleteTodo from './components/DeleteTodo';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux'

const App = () => {
  const state = useSelector(state => state.todo);

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
        <AddTodo />
        <DeleteTodo />
      </div>      
    </div>
  );
}
export default App;
