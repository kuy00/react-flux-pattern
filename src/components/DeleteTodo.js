import { remove as todoRemoveAction } from '../redux/modules/todo';
import { useDispatch } from 'react-redux';

const DeleteTodo = () => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(todoRemoveAction());
  };

  return (
    <button onClick={deleteTodo}>Delete Todo</button>
  );
};
export default DeleteTodo;
