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

  return (
    <div className="App">
      <AddTodo addNewTodo={addNewTodo} />
      <Todos items={todosList} />
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
