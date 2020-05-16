import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-fc82f.firebaseio.com/'
});

export default instance;