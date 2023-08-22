import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (requestData) => {
  const [data, setData] = useState("");
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
      if (response.status === 208) {
        setError(response.data.err)
      } else {
        setData(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      setError("error with your request");
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export default useApiData;
