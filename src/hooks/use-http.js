import { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchField = useCallback(async (apiEndPoint) => {
    setError(null);
    try {
      const response = await fetch(
        `https://pcfy.redberryinternship.ge/api/${apiEndPoint}`
      );

      if (!response.ok) {
        console.log("error occured");
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setData(data.data);
      //   applyData(data.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  }, []);

  return {
    error,
    fetchField,
    data,
  };
};

export default useHttp;
