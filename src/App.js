import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";
import LaptopForm from "./pages/LaptopForm";

function App() {
  return (
    <div className="App">
      {/* <EmployeeForm /> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fillout/personal" element={<EmployeeForm />} />
        <Route path="/fillout/laptop" element={<LaptopForm />} />
      </Routes>
    </div>
  );
}

export default App;
