import api from '../../api/server'

export const loginUser = async (credentials) => {
    return api.post('/auth/login', credentials);
}

export const signupUser = async (credentials) => {
    return api.post('/auth/signin', credentials);
}

export const logoutUser = async (credentials) => {
    return api.get('/auth/signin');
}