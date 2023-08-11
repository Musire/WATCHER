import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (method, url, baseURL, requestData = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: method,
          url: url,
          baseURL: baseURL,
          data: requestData,
        });

        console.log(response.data)
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useApiData;
