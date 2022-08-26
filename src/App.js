import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
  return (
    <div className="App">
      {/* <EmployeeForm /> */}
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
