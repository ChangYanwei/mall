import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config;
  },error => {

  });

  instance.interceptors.response.use(response => {
    return response.data;
  },error => {

  })

  return instance(config)
}
