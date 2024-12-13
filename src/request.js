import axios from 'axios';
import { USER_TOKEN } from './utils/key';
import { useUserStore } from './store/modules/user';

export const request = axios.create({
  baseURL: '/api',
  timeout: 2000,
});
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(USER_TOKEN);
    // 在发送请求之前做些什么
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data } = response;
    if (data.code !== 200) {
      if (data.code === 401) {
        const userStore = useUserStore();
        userStore.logout();
        window.location.reload();
      }
      return Promise.reject(new Error('Error'));
    }
    return data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
