import axios from 'axios';

const axiosClient =  axios.create({
    baseURL : 'https://challenge-react.alkemy.org/'
});

export default axiosClient;