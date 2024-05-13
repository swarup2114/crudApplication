import React from "react";

const CrudOperation = ({ users, handleEdit, handleDelete }) => {
  return (
    <>
      {users.length > 0 && (
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Pincode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.pincode}</td>
                  <td>
                    <div className="btn-group " role="group">
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary "
                        onClick={() => handleEdit(index, user)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CrudOperation;
