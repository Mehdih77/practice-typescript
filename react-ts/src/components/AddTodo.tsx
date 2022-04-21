import React, { useRef } from "react";

const AddTodo = () => {
  // HTMLInputElement || HTMLButtonElement || HTMLDivElement ...
  const inputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent || React.MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      alert("Input Is Empty");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add Text:</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
