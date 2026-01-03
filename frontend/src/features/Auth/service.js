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

export const validateUserEmail = (credentials, token) => {
    return api.post('api/auth/verify-email', credentials, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const emailValidationResendCode = (credentials, token) => {
    return api.post('api/auth/verify-email-resend', credentials, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}