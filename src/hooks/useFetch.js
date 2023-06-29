import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL);
        // console.log(response);
        const data = await response.json();
        setData(data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return { data, loading, error };
};

export default useFetch;
