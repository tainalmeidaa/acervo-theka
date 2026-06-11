import axios from 'axios';

const http = axios.create({
    baseURL: 'https://thekaapideploy2.pythonanywhere.com'
});

export default http;