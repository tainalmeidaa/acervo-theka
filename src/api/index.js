import axios from 'axios';

const http = axios.create({
    baseURL: 'https://thekaapi3.pythonanywhere.com/'
});

export default http;