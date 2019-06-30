import React from 'react';
import { apiClient } from './../utils';

const addTodo =  async (todo) => {
  return apiClient.post('', todo).catch(console.error);
};

const deleteTodo = async (id) => {
    return apiClient.delete(`/${id}`, ).catch(console.error);
};

const updateTodo = async (id, todo) => {
    return apiClient.put(`/${id}`, todo).catch(console.error);
};

const getTodos = async () => {
    return apiClient.get('?_limit=10').catch(console.error);
};

const getTodo = async (id) => {
    return apiClient.get(`/${id}`).catch(console.error);
};

export default {
    addTodo,
    deleteTodo,
    getTodos,
    getTodo,
    updateTodo
}
