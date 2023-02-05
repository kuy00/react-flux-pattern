import { add as todoAddAction } from '../redux/modules/todo';
import todo from '../constants/todoStatus';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(todoAddAction({
      name: 'Flux 패턴 학습',
      status: todo.WAITING,
    }));
  };

  return (
    <button onClick={addTodo}>Add Todo</button>
  );
};
export default AddTodo;
