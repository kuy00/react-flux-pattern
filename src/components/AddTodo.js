import { addTodo as actionAddTodo } from "../actions/todo";
import todo from '../constants/todoStatus';

const AddTodo = (props) => {
  const { dispatch } = props;
  const addTodo = () => {
    dispatch(actionAddTodo({
      name: 'Flux 패턴 학습',
      status: todo.WAITING,
    }));
  };

  return (
    <button onClick={addTodo}>Add Todo</button>
  );
};
export default AddTodo;
