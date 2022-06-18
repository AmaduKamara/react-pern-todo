import React from "react";

const InputTodo = () => {
  return (
    <>
      <div className="my-5 d-flex justify-content-center">
        <div className="w-50 p-3">
          <h1 className="text-center">PERN Todo List</h1>
          <form className="d-flex mt-5">
            <input
              type="text"
              placeholder="Enter a todo description"
              className="form-control"
            />
            <button className="btn btn-info mx-3 text-white">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
