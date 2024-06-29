import { useState, useEffect } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://countriesnow.space/api/v0.1/countries/population/cities'
        );
        const data = await response.json();
        setCities(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { cities, loading };
};

export default useCities;
