import Todos from "./components/Todos";
import TodoType from "./models/todo";

function App() {
  const todosList: TodoType[] = [
    {
      id: 1,
      text: "Learn TypeScript",
    },
    {
      id: 2,
      text: "Learn Style Component",
    },
    {
      id: 3,
      text: "Learn React",
    },
  ];

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

  return (
    <div className="App">
      <Todos items={todosList} />
    </div>
  );
}

export default App;
