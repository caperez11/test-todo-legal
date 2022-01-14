import axios from 'axios';


const authApi = axios.create({
    baseURL: 'https://90h9amptse.execute-api.us-east-1.amazonaws.com',

});

authApi.interceptors.request.use((config) => {

    config.headers = {
        Authorization: localStorage.getItem('access_token')
    };

    return config;
});


export default authApi;


