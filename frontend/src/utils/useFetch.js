import { useEffect, useState } from "react"

export default function useFetch(url){

  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`)
        .then(response => response.json())
        .then((data) => {
          setData(data.data);
        })
        .catch(setError)
        .finally(() => setLoading(false));  
      
  }, [url])
  return { data, error, loading }

}