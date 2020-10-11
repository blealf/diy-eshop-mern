import { useState, useEffect } from 'react'

const useFetch = ({ url }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!url) return
    fetch(url)
      .then(setLoading(true))
      .then(response => {
        if (response.status !== 200) {
          console.log("Some error occured while fetching the data. Status Code: " + response.status);
          return
        }
        response.json()
      })
      .then((dataJSON) => {
        setData(dataJSON)
      })
      .then(() => setLoading(false))
      .catch(error => {
        setError(error)
      })
  }, [url])

  return (
    { data, error, loading }
  )
}

export default useFetch
