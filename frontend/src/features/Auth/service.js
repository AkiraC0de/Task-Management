import api from '../../api/server'

export const loginUser = (credentials) => {
    return api.post('/api/auth/login', credentials); 
}

export const signupUser = (credentials) => {
    return api.post('/api/auth/signup', credentials);
}

export const logoutUser = (credentials) => {
    return api.get('/api/auth/signin');
}

export const validateUserEmail = (credentials) => {
    return api.post('api/auth/verify-email', credentials)
}