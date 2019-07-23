import axios from "axios";
// import qs from 'qs';

let http = axios.create();

//配置全局axios
http.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 带cookie请求
// http.defaults.withCredentials = true;

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    if (error && error.response) {
      //   let data = error.response.data;
      //   let status = error.response.status;
      //   let headers = error.response.headers;
    } else {
      console.log("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default http;
