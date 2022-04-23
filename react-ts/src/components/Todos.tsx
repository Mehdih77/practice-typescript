import React from "react";
import TodoType from "../models/todo";
import TodoItem from "./TodoItem";

//! void =>> cuz it does not return anything

const Todos: React.FC<{ items: TodoType[]; deleteTodo: (id : number) => void }> = (props) => {
  return (
    <div>
      {props.items.map((i) => (
        <TodoItem key={i.id} todo={i} deleteTodo={props.deleteTodo} />
        // <TodoItem key={i.id} text={i.text} />
      ))}
    </div>
  );
};

export default Todos;
