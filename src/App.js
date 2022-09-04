import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";
import LaptopForm from "./pages/LaptopForm";
// import { useState } from "react";
import Success from "./pages/Success";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";
// import axios from "axios";

function App() {
  // const sendRequest = async () => {
  //   const formValues = {
  //     token: "1c40792d27465fbe7c55aeb3cead277e",
  //     laptop_image: img,
  //     name: "დათო",
  //     surname: "მალუტაშვილი",
  //     team_id: 1,
  //     position_id: 1,
  //     phone_number: "+995591921669",
  //     email: "dato@redberry.ge",
  //     laptop_name: "HP",
  //     laptop_brand_id: 1,
  //     laptop_cpu: "Apple M1",
  //     laptop_cpu_cores: 64,
  //     laptop_cpu_threads: 129,
  //     laptop_ram: 12,
  //     laptop_hard_drive_type: "HDD",
  //     laptop_state: "new",
  //     laptop_purchase_date: "10-10-2022",
  //     laptop_price: 1300,
  //   };
  //   console.log(formValues);

  //   const data = new FormData();

  //   data.append("laptop_image", img);
  //   data.append("token", "1c40792d27465fbe7c55aeb3cead277e");
  //   data.append("name", "დათო");
  //   data.append("surname", "მალუტაშვილი");
  //   data.append("team_id", 1);
  //   data.append("position_id", 1);
  //   data.append("phone_number", "+995591921669");
  //   data.append("email", "dato@redberry.ge");
  //   data.append("laptop_name", "HP");
  //   data.append("laptop_brand_id", 1);
  //   data.append("laptop_cpu", "Apple M1");
  //   data.append("laptop_cpu_cores", 64);
  //   data.append("laptop_cpu_threads", 128);
  //   data.append("laptop_ram", 64);
  //   data.append("laptop_hard_drive_type", "HDD");
  //   data.append("laptop_state", "new");
  //   data.append("laptop_purchase_date", "");
  //   data.append("laptop_price", 1200);

  //   const formKeys = Object.keys(formValues);

  //   // for (let formKey of formKeys) {
  //   //   console.log(formKey, formValues[formKey]);
  //   //   data.append(formKey, formValues[formKey]);
  //   // }

  //   let res = await axios.post(
  //     "https://pcfy.redberryinternship.ge/api/laptop/create",
  //     data,
  //     {}
  //   );
  //   console.log(res);

  //   // const response = await fetch(
  //   //   "https://pcfy.redberryinternship.ge/api/laptop/create",
  //   //   {
  //   //     method: "POST",
  //   //     body: fd,

  //   //     body: JSON.stringify({
  //   //       token: "79d7f8018596049d0066cb4e760f0b49",
  //   //       name: "დათო",
  //   //       surname: "მალუტაშვილი",
  //   //       team_id: 1,
  //   //       position_id: 1,
  //   //       phone_number: "+995555555555",
  //   //       email: "dato@redberry.ge",
  //   //       laptop_name: "HP",
  //   //       laptop_image: img,
  //   //       laptop_brand_id: 1,
  //   //       laptop_cpu: "Apple M1",
  //   //       laptop_cpu_cores: 64,
  //   //       laptop_cpu_threads: 128,
  //   //       laptop_ram: 12,
  //   //       laptop_hard_drive_type: "HDD",
  //   //       laptop_state: "new",
  //   //       laptop_purchase_date: "10-10-2022",
  //   //       laptop_price: 1200,
  //   //     }),
  //   //     headers: {
  //   //       "Content-Type": "multipart/form-data;",
  //   //       Accept: "application/json",
  //   //     },
  //   //   }
  //   // );
  //   // const responseData = await response.json();
  //   // console.log(responseData);
  // };

  // const imgHandler = (event) => {
  //   console.log(event.target.files[0]);
  //   setImg(event.target.files[0]);
  // };
  // const upload = () => {
  //   sendRequest();
  // };

  return (
    <div className="App">
      {/* <EmployeeForm /> */}
      {/* <input type="file" onChange={imgHandler} /> */}
      {/* <button onClick={upload}>Upload</button> */}
      {/* <img src={img} /> */}

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
