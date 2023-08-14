import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (requestData) => {
  const [data, setData] = useState("blank");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (body=null) => {
    try {
      const response = await axios.request({
        method: requestData.method,
        url: requestData.url,
        baseURL: requestData.baseurl,
        data: body
      });
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export default useApiData;
