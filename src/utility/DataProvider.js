import React, { useState, useEffect, createContext } from 'react';
import useAxios from './useAxios';
// import useFetch from './useFetch';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const UsersUrl = "http://localhost:3001";
  const url = "http://localhost:3001/api/products/";

  const { data, loading, error } = useAxios(url);
  const [products, setProducts ] = useState([]);


  useEffect(() => {
    console.log(loading);
    if(data && data.length !== 0) {
      setProducts(data)
    }
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  return (
    <DataContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider, DataContext}
