const TodoItem = (props) => {
  const { todo } = props;

  return (
    <div
      style={{
        display: 'grid',
        border: '1px solid lightgray',
        borderRadius: '20px',
        width: '200px',
        padding: '10px',
        marginBottom: '10px',
      }}>
      <span>
        name: {todo.name}
      </span>
      <span>
        status: {todo.status}
      </span>
    </div>
  )
}
export default TodoItem;
