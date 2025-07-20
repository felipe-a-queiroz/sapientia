import axios from 'axios';
import config from '../config';

const api = axios.create({
    baseURL: config.API_URL,
});

// Interceptor para adicionar o token de autenticação em todas as requisições
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw (
            error.response?.data || { message: 'Ocorreu um erro inesperado.' }
        );
    }
};

export const logoutUser = async () => {
    try {
        await api.post('/auth/logout');
    } catch (error) {
        throw (
            error.response?.data || {
                message: 'Ocorreu um erro ao realizar logout.',
            }
        );
    }
};

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Erro ao buscar usuários.' };
    }
};

export const createUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Erro ao adicionar usuário.' };
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Erro ao atualizar usuário.' };
    }
};
export const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Erro ao excluir usuário.' };
    }
};

export default api;
