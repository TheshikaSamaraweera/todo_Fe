import axios from 'axios';

const BASE_REST_API_URL = 'http://localhost:8080/api/todo';

export const getAllTodos = () => {
    return axios.get(BASE_REST_API_URL)
}