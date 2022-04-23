import React, { useRef } from "react";

const AddTodo: React.FC<{ addNewTodo: (text: string) => void }> = (props) => {
  // HTMLInputElement || HTMLButtonElement || HTMLDivElement ...
  const inputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent || React.MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //? in here we dont know its string or not...
    // const enteredText = inputRef.current?.value;

    //? in here we are sure its string type (!)
    const enteredText = inputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      alert("Input Is Empty");
    }

    props.addNewTodo(enteredText);
  };

  return (
    <form style={{ margin: "20px 10px" }} onSubmit={submitHandler}>
      <label htmlFor="text">Add Text:</label>
      <input
        style={{ margin: "0 10px" }}
        type="text"
        id="text"
        ref={inputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
