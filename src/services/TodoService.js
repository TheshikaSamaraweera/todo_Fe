import axios from 'axios';

const BASE_REST_API_URL = 'http://localhost:8080/api/todo';

export const getAllTodos = () => {
    return axios.get(BASE_REST_API_URL)
}


export const savetodo = (todo) => {
    return axios.post(BASE_REST_API_URL, todo)
}

export const gettodo = (id) => {
    return axios.get(`${BASE_REST_API_URL}/${id}`);
}


export const updatetodo = (id ,todo) => {
    return axios.put(`${BASE_REST_API_URL}/${id}` , todo);
}

export const deletetodo = (id) => {
    return axios.delete(`${BASE_REST_API_URL}/${id}`);
}

export const completetodo = (id) => {
    return axios.patch(`${BASE_REST_API_URL}/${id}/complete`);
}

export const incompletetodo = (id) => {
    return axios.patch(`${BASE_REST_API_URL}/${id}/incomplete`);
}