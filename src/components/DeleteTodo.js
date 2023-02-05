import { deleteTodo as actionDeleteTodo } from "../actions/todo";
import { useDispatch } from 'react-redux';

const DeleteTodo = () => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(actionDeleteTodo());
  };

  return (
    <button onClick={deleteTodo}>Delete Todo</button>
  );
};
export default DeleteTodo;
