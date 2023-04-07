import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployees from "./components/AddEmployees";
import UpdateEmployee from "./components/UpdateEmployee";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/employees" element={<ListEmployeeComponent />} />
        <Route path="/add-employees" element={<AddEmployees />} />
        <Route path="/update-employees/:id" element={<UpdateEmployee />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
