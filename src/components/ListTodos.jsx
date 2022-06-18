import React, { useEffect, useState } from "react";

// Fetching all todos
const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const todos = await response.json();
      setTodos(todos);
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect calling the fetch todo function on render
  useEffect(() => {
    fetchTodos();
  }, []);

  // Deletinga todo
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-50 p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((todo) => (
                  <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td className="text-info btn">Edit</td>
                    <td
                      className="text-danger btn"
                      onClick={() => handleDelete(todo.todo_id)}
                    >
                      Delete
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListTodos;
