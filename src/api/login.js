import axios from './index';
<<<<<<< HEAD
export function login(phone, password) {
    return axios.post('/user/login', {
        phone,
        password
    })
}
=======
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
 
>>>>>>> 595b54725b3a483c7dc6c1da2ad6f468350d9963
