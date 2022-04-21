import React from "react";
import TodoType from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: TodoType[] }> = (props) => {
  return (
    <div>
      {props.items.map((i) => (
        <TodoItem key={i.id} todo={i} />
        // <TodoItem key={i.id} text={i.text} />
      ))}
    </div>
  );
};

export default Todos;
