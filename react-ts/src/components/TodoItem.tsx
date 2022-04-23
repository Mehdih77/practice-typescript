import TodoType from "../models/todo";

const TodoItem: React.FC<{
  todo: TodoType;
  deleteTodo: (id: number) => void;
}> = (props) => {
  return (
    <li onClick={() => props.deleteTodo(props.todo.id)}>{props.todo.text}</li>
  );
};

export default TodoItem;


// const TodoItem: React.FC<{ text: string }> = (props) => {
//   return <li>{props.text}</li>;
// };
