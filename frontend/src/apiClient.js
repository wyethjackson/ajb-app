import axios from 'axios';

export default axios.create({
    baseURL: import.meta.env.BACKEND_API_URL,
});
