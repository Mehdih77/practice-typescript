import React from "react";
import TodoType from "../models/todo";

const Todos: React.FC<{ items: TodoType[] }> = (props) => {
  return (
    <div>
      {props.items.map((i) => (
        <li key={i.id}>{i.text}</li>
      ))}
    </div>
  );
};

export default Todos;
