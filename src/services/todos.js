import React from 'react';
import axios from 'axios';
import { BASE_URL } from "../constants";

const addTodo =  async (todo) => {
  return axios.post(BASE_URL, todo).catch(console.error);
};

const deleteTodo = async (id) => {
    return axios.delete(BASE_URL, { id }).catch(console.error);
};

const getTodos = async () => {
    return axios.get(BASE_URL).catch(console.error);
};

export {
    addTodo,
    deleteTodo,
    getTodos
}
