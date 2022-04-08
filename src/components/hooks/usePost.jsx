import {useState, useEffect} from 'react';
import axios from 'axios';

const usePost = (URL,body) => {

    const [response, setResponse]= useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        refetch()
    },[URL])

    const refetch = () => {
        setLoading(true);
        axios.post(URL,body)
            .then(data=>setResponse(data))
            .catch(err=>setError(err))
            .finally(setLoading(false));
    }

  return {response, loading, error, refetch}
}

export default usePost