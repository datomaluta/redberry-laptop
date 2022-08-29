import "./App.css";
import { Route, Routes, Navigate, renderMatches } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/fonts/HelveticaNeue.ttc";
import EmployeeForm from "./pages/EmployeeForm";
import LaptopForm from "./pages/LaptopForm";
import { useEffect, useState } from "react";
import Success from "./pages/Success";
import Records from "./pages/Records";
import RecordDetail from "./pages/RecordDetail";

function App() {
  const [img, setImg] = useState(null);
  const [baseImg, setBaseImg] = useState();

  const converBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const sendRequest = async () => {
    const base64 = await converBase64(img);
    setBaseImg(base64);
    console.log(base64);
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/laptop/create",
      {
        method: "POST",
        body: JSON.stringify({
          token: "79d7f8018596049d0066cb4e760f0b49",
          name: "დათო",
          surname: "მალუტაშვილი",
          team_id: 1,
          position_id: 1,
          phone_number: "+995555555555",
          email: "dato@redberry.ge",
          laptop_name: "HP",
          laptop_image: base64,
          laptop_brand_id: 1,
          laptop_cpu: "i3",
          laptop_cpu_cores: 64,
          laptop_cpu_threads: 128,
          laptop_ram: 12,
          laptop_hard_drive_type: "HDD",
          laptop_state: "new",
          laptop_purchase_date: "10-10-2022",
          laptop_price: 1200,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      }
    );
    // console.log(response);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    // sendRequest();
    const fetchData = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/laptops?token=79d7f8018596049d0066cb4e760f0b49"
      );
      const data = await response.json();
      console.log(data);
    };
    // fetchData();
  }, []);
  const imgHandler = (event) => {
    console.log(event.target.files[0]);

    setImg(event.target.files[0]);
  };
  const upload = () => {
    sendRequest();
  };

  return (
    <div className="App">
      {/* <EmployeeForm /> */}
      {/* <input type="file" onChange={imgHandler} /> */}
      {/* <button onClick={upload}>Upload</button> */}
      {/* <img src={baseImg} /> */}
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
