import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // Edit and update a todo
  const handleUpdate = async (e) => {
    const body = { description };
    await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    window.location = "/";
    try {
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <td
        className="text-info btn"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </td>

      <td
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div
          className="modal-dialog"
          onClick={() => setDescription(todo.description)}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-info"
                data-bs-dismiss="modal"
                onClick={(e) => handleUpdate(e)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </td>
    </>
  );
};

export default EditTodo;
