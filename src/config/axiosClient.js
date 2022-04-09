import axios from 'axios';

const axiosClient =  axios.create({
    baseURL : 'https://challenge-react.alkemy.org/',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default axiosClient;