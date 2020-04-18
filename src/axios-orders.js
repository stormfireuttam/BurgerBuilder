import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-burger-app-bab08.firebaseio.com/'
});

export default instance;