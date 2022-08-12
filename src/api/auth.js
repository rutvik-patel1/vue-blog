import axios from './index';

const AUTH_API = process.env.VUE_APP_FIREBASE_API

export function loginWithFirebase(email,password) {
    const payload = {
        email,
        password,
        returnSecureToken: true
    }
    return axios({
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${AUTH_API}`,
        method: "post",
        data:payload
    })
}

export function registerWithFirebase(email, password) {
    const payload = {
        email,
        password,
        returnSecureToken: true
    }
    return axios({
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${AUTH_API}`,
        method: "post",
        data:payload
    })
}

