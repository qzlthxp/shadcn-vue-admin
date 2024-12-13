import { request } from '@/request';

export function login() {
  return request.post('/login');
}

export function getUserInfo() {
  return request.get('/user');
}
