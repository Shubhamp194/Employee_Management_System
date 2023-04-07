import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  async function loadEmployee() {
    // console.log("employees loaded");
    const res = await axios.get(`http://localhost:8081/api/v1/employees/${id}`);
    setEmp(res.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("Submitted");
    // console.log(emp);
    await axios.put(`http://localhost:8081/api/v1/employees/${id}`, emp);
    navigate("/");
  }

  function handleChange(e) {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <h2 className="text-center">Update Employees</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <lable>Enter First Name: </lable>
        <input
          type="text"
          name="firstName"
          value={emp.firstName}
          placeholder="Enter new first name"
          onChange={handleChange}
        />
        <br />
        <br />
        <lable>Enter Last Name: </lable>
        <input
          type="text"
          name="lastName"
          value={emp.lastName}
          placeholder="Enter new last name"
          onChange={handleChange}
        />
        <br />
        <br />
        <lable>Enter email: </lable>
        <input
          type="text"
          name="email"
          value={emp.email}
          placeholder="Enter new email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn btn-success" type="Submit">
          Save
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default UpdateEmployee;
