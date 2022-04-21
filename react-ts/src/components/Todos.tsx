import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <div>
      {props.items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </div>
  );
};

export default Todos;
