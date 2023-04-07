import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);

  async function getData() {
    const res = await axios.get("http://localhost:8081/api/v1/employees");
    // console.log(res);
    setEmployees(res.data);
  }

  useEffect(() => {
    getData();
  }, [employees]);

  async function deleteEmp(id) {
    console.log("Deleted");
    await axios.delete(`http://localhost:8081/api/v1/employees/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">Employees List</h2>
      <Link
        to="/add-employees"
        style={{ margin: "10px 1px" }}
        className="btn btn-success"
      >
        Add Employee
      </Link>
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <th> Employee First Name</th>
            <th> Employee Last Name</th>
            <th> Employee email id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/update-employees/${emp.id}`}
                  >
                    Update
                  </Link>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      deleteEmp(emp.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
