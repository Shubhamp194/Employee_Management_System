import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddEmployees() {
  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("Submitted");
    await axios.post("http://localhost:8081/api/v1/employees", emp);
    navigate("/");
    window.location.reload(true);
  }

  return (
    <div>
      <div className="container">
        <h2 className="text-center">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name : </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your First Name"
            value={emp.fName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Last Name : </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your Last Name"
            value={emp.lName}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Email id : </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email id"
            value={emp.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddEmployees;
