import axios from './index';
export function login(phone, password) {
    return axios.post('/user/login', {
        phone,
        password
    })
}