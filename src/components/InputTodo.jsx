import React from "react";
import { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <div className="w-50 p-3">
          <h1 className="text-center">PERN Todo List</h1>
          <form className="d-flex mt-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a todo description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-info mx-3 text-white">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
