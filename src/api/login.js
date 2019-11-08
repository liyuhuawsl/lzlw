import axios from './index';
export function handelLogin(phone, password) {
    return axios.post('/user/login', {
        phone,
        password
    }).then(result => {
        if (parseInt(result.code) === 0) {
            return result;
        }
    });
}
export function queryClassify() {
    return axios.get('/user/classify').then(result => {
        if (parseInt(result.code) === 0) {
            return result;
        }
    })
}