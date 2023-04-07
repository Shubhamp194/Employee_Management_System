import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);

  let navigate = useNavigate();

  async function getData() {
    const res = await axios.get("http://localhost:8081/api/v1/employees");
    // console.log(res);
    setEmployees(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  function updateEmp(id) {
    console.log("Updated for id: " + id);
    // navigate(`/update-employees/${id}`)
  }

  return (
    <div className="container">
      <h2 className="text-center">Employees List</h2>
      <Link to="/add-employees" className="btn btn-primary">
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
                    className="btn btn-warning"
                    to={`/update-employees/${emp.id}`}
                  >
                    Update
                  </Link>
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
