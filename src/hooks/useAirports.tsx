import { useState, useEffect } from 'react';

const useAirports = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('./airports.json');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the airports data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

export default useAirports;
