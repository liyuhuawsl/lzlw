<<<<<<< HEAD
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = function (data) {
	if (!data) return data;
	let result = ``;
	for (let attr in data) {
		if (!data.hasOwnProperty(attr)) break;
		result += `&${attr}=${data[attr]}`;
	}
	return result.substring(1);
};
axios.interceptors.response.use(function onFulfilled(response) {
	return response.data;
}, function onRejected(reason) {
	return Promise.reject(reason);
});
axios.defaults.validateStatus = function (status) {
	return /^(2|3)\d{2}$/.test(status);
}
=======

import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://127.0.0.1:8888';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/* 设置请求主体传递数据的格式 基于axios.post传递的请求主体的内容格式一般为x-www-form-urlencoded */

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);//只针对post请求


/* 响应拦截器 */
axios.defaults.validateStatus = status => {
    //自定义响应成功的HTTP状态码
    return /^(2|3)\d{2}$/.test(status);
};
axios.interceptors.response.use((response) => {
    return response.data;
}, error => {
    let { response } = error;
    if (response) {
        switch (response.status) {
            case 401://权限：当前请求需要用户验证(一般是未登录)
                break;
            case 403://服务器接收请求，但拒绝执行(token\session过期) 
                break;
            case 404:
                break;

        }
        if (!window.navigator.onLine) {
            //断网处理:可以跳转到断网页面
            return;
        }
    } else {
        return Promise.reject(error);
    }
})
>>>>>>> 595b54725b3a483c7dc6c1da2ad6f468350d9963
export default axios;