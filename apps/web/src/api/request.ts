import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

// 创建 axios 实例
const request: AxiosInstance = axios.create({
	// 对应 Vite 配置里的 proxy 路径
	baseURL: '/api',
	timeout: 10000, // 请求超时时间
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
});

// 请求拦截器
request.interceptors.request.use(
	(config) => {
		// 可以在这里添加 Token
		// const token = localStorage.getItem('token');
		// if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 响应拦截器
request.interceptors.response.use(
	(response: AxiosResponse) => {
		// 假设后端返回结构为 { code: 200, data: ..., message: '' }
		console.log(response);

		const res = response.data;
		if (res.code !== 200) {
			// 可以在这里添加统一的错误提示，如 message.error(res.message)
			return Promise.reject(new Error(res.message || 'Error'));
		}
		console.log(res.data);

		return res.data;
	},
	(error) => {
		// 处理 HTTP 状态码错误
		console.error('err' + error);
		return Promise.reject(error);
	},
);

export default request;
