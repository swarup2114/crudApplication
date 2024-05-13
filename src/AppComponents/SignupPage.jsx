// src/components/SignupPage.js
import React, { useState } from "react";
import CrudOperation from "./CrudOperation";

const SignupPage = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phoneNumber: "",
    pincode: "",
  });
  const [editIndex, setEditIndex] = useState(-1);
  
  const handleFormChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleEdit = (id, user) => {
    setEditIndex(id);
    setUserDetails(user);
  };

 


  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
       setUsers([...users, userDetails]);
    } else {
     
      const updatedUsers = [...users];
      updatedUsers[editIndex] = userDetails;
      setUsers(updatedUsers);
      setEditIndex(-1);
      setUserDetails({
        name: "",
        phoneNumber: "",
        pincode: "",
      });
    }
    setUserDetails({
      name: "",
      phoneNumber: "",
      pincode: "",
    });
  };
  

  return (
    <div>
      <div className="container bg-light">
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control py-2 px-2"
              id="name"
              name="name"
              value={userDetails.name}
              placeholder="Enter Name"
              onChange={handleFormChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control py-2 px-2"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={userDetails.phoneNumber}
              onChange={handleFormChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input
              type="number"
              className="form-control py-2 px-2"
              id="pincode"
              name="pincode"
              placeholder="Enter Pincode"
              value={userDetails.pincode}
              onChange={handleFormChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            {editIndex === -1 ? "Submit" : "Update"}
          </button>
        </form>
      </div>
      <div>
        <CrudOperation
          users={users}
          handleEdit={handleEdit}
          handleDelete={(id) =>
            setUsers(users.filter((user, index) => index !== id))
          }
        />
      </div>
    </div>
  );
};

export default SignupPage;
