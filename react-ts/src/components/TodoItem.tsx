import TodoType from "../models/todo";

const TodoItem: React.FC<{ todo: TodoType }> = (props) => {
  return <li>{props.todo.text}</li>;
};
// const TodoItem: React.FC<{ text: string }> = (props) => {
//   return <li>{props.text}</li>;
// };

export default TodoItem;