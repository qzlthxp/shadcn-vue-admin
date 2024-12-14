import { request } from '@/request';

export function cardInfo() {
  request.get('/cards');
}
