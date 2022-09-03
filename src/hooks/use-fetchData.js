import { useCallback, useState } from "react";

const useFetchData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const fetchData = useCallback(async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      setIsLoading(true);
      const response = await fetch(url);
      console.log(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setData(data.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setIsLoading(false);
    }
  }, []);

  return {
    error,
    isLoading,
    fetchData,
    data,
  };
};

export default useFetchData;
