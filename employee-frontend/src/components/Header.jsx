import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
          <div>
            <Link to="/" className="navbar-brand">
              Employees List
            </Link>
            <Link to="/add-employees" className="navbar-brand">
              Add Employees
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
