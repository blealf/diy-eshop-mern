import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useAxios = (url, method, payload) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  const axiosGet = (source) => {
    axios.get(url, {cancelToken: source.token})
      .then(setLoading(true))
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        setData(response.data)
      })
      .then(() => {
        if(isMounted){
          setLoading(false)
        }
      })
      .catch(error => {
        setError(error)
      })
  }

  const axiosPost = (source) => {
    axios.post(url, {cancelToken: source.token}, payload)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        setData(response.status)
      })
      .catch(error => {
        setError(error)
      })
  }

  useEffect(() => {
    // const abortController = new AbortController();
    // const signal = abortController.signal
    const source = axios.CancelToken.source();

    if(!url) return;
    
    switch(method){
      case "get": axiosGet(source);
        break;
      case "post": axiosPost(source);
        break;
      default: axiosGet(source);
    }
    return () => {
      isMounted.current = false;
      // abortController.abort();
      try{
        source.cancel("axios request cancelled");
      }
      catch (err){
        if(axios.isCancel(err)) {
          return "axios request cancelled";
        }
        return err
      }
    }
  }, [url])



  return  { data, loading, error }
}

export default useAxios;

