import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (URL) => {

    const [response, setResponse]= useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        refetch()
    },[URL])

    const refetch = () => {
        setLoading(true);
        axios.get(URL)
            .then(data=>setResponse(data))
            .catch(err=>setError(err))
            .finally(setLoading(false));
    }

  return {response, loading, error, refetch}
}

export default useFetch