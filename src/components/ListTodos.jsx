import React from "react";

const ListTodos = () => {
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
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListTodos;
