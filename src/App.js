import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";
import LaptopForm from "./pages/LaptopForm";

function App() {
  return (
    <div className="App">
      {/* <EmployeeForm /> */}
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<LaptopForm />} />
      </Routes>
    </div>
  );
}

export default App;
