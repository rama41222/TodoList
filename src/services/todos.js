import React from 'react';
import { apiClient } from './../utils';
import { BASE_URL } from "../constants";

const addTodo =  async (todo) => {
  return apiClient.post(todo).catch(console.error);
};

const deleteTodo = async (id) => {
    return apiClient.delete(`/${id}`, ).catch(console.error);
};

const getTodos = async () => {
    return apiClient.get().catch(console.error);
};

const getTodo = async (id) => {
    return apiClient.get(`/${id}`).catch(console.error);
};

export default {
    addTodo,
    deleteTodo,
    getTodos,
    getTodo
}
