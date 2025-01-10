import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!options.url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.request(options);
        setData(response.data); // Ensure correct data mapping
      } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options]);

  return { data, loading, error };
}
