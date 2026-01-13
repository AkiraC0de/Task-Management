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

export const emailValidationResendCode = (token) => {
    return api.get('api/auth/verify-email-resend', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const requestForgotPassword = (credentials) => {
    return api.post('api/auth/request-reset-password', credentials)
}

export const verifyToken = (token) => {
    return api.get('api/auth/verify-token', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const resetUserPassword = (credentials ,token) => {
    return api.post('api/auth/reset-password', credentials, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}