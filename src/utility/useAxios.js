import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    if(!url) return;
    axios.get(url)
      .then(setLoading(true))
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        setData(response.data)
        
      })
      .then(() => setLoading(false))
      .catch(error => {
        setError(error)
      })
  }, [url])

  return  { data, loading, error }
}

export default useAxios

