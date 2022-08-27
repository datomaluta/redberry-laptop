// import { useState } from "react";

// const useHttp = () => {
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   const fetchField = async () => {
//     setError(null);
//     try {
//       const response = await fetch(
//         "https://pcfy.redberryinternship.ge/api/teams"
//       );

//       if (!response.ok) {
//         console.log("error occured");
//         throw new Error("Request failed!");
//       }
//       const data = await response.json();
//       setData(data.data);
//       //   applyData(data.data);
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     }
//   };

//   return {
//     error,
//     fetchField,
//     data,
//   };
// };

// export default useHttp;
