import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";
import LaptopForm from "./pages/LaptopForm";
import Success from "./pages/Success";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fillout/personal" element={<EmployeeForm />} />
        <Route path="/fillout/laptop" element={<LaptopForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/:id" element={<RecordDetail />} />
      </Routes>
    </div>
  );
}

export default App;
