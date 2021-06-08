import React, { useState, useEffect, createContext } from 'react';
import useAxios from './useAxios';
import Loading from './Loading';
// import useFetch from './useFetch';

const DataContext = createContext();

const OrderProvider = ({ children }) => {
  const url = "http://localhost:3001/api/orders/";

  const { data, loading, error } = useAxios(url, "get");
  const [orders, setOrders ] = useState([]);


  useEffect(() => {
    let isSubscribed = true
    if (isSubscribed) {
      if(data && data.length !== 0) {
        setOrders(data)
      }
    }
    
    return(() => {
      isSubscribed = false
    })
  }, [data])

  // if (loading) return <Loading type="cylon" color="teal"/>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <DataContext.Provider
      value={{
        orders,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export {OrderProvider, DataContext}
