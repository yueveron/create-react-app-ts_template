import { useState, useEffect } from 'react';
import axios from 'axios';

const useDisplayList = (url:string) => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setList(response.data);
        }
      } catch (error) {
        setLoading(false);
        setError('requestFailed');
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  
  /** return  */
  return {
    list,
    loading,
    error
  };
};

export default useDisplayList;
