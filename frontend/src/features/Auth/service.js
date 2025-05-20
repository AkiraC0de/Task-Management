import api from '../../api/server'

export const loginUser = async (credentials) => {
    return await api.post('/auth/login', credentials);
}

export const signupUser = async (credentials) => {
    return await api.post('/auth/signin', credentials);
}

export const logoutUser = async (credentials) => {
    return await api.get('/auth/signin');
}