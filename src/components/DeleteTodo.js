import { deleteTodo as actionDeleteTodo } from "../actions/todo";

const DeleteTodo = (props) => {
  const { dispatch } = props;
  const deleteTodo = () => {
    dispatch(actionDeleteTodo());
  };

  return (
    <button onClick={deleteTodo}>Delete Todo</button>
  );
};
export default DeleteTodo;
