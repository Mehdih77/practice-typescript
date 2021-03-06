import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoType from "./models/todo";

function App() {
  const [todosList, setTodosList] = useState<TodoType[]>([]);

  const addNewTodo = (text: string) => {
    setTodosList([
      ...todosList,
      {
        id: Math.random(),
        text: text,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodosList((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <AddTodo addNewTodo={addNewTodo} />
      <Todos items={todosList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

//! use with Class
// const todosList: TodoType[] = [
//   {
//     id: "1",
//     text: "Learn TypeScript",
//   },
//   {
//     id: "2",
//     text: "Learn Style Component",
//   },
// ];
//! OR
// const todosList = [new TodoType("SSS"), new TodoType("SSS")];
