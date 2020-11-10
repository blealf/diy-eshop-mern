import React, { useState, useEffect, createContext } from 'react';
import useAxios from './useAxios';
import Loading from './Loading';

const DataContext = createContext();

const ProductProvider = ({ children }) => {
  const url = "http://localhost:3001/api/products/";
  const { data, loading, error } = useAxios(url, "get");
  const [products, setProducts ] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if(data && data.length !== 0 ) {
        setProducts(data)
      }
    }
    
    return(() => {
      isSubscribed = false;
    })
  }, [data])

  if (loading) return <Loading type="cylon" color="teal"/>
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

export {ProductProvider, DataContext}
