import axios from 'axios';

import { TODOS_URL } from '../constants';
import { Item } from '../components';

export const getTodos = () =>
  axios.get(TODOS_URL).then(({ data }) => data);

export const postTodo = (item: Item) =>
  axios.post(TODOS_URL, item).then(({ data }) => data);

export const deleteTodo = (id: string) =>
  axios.delete(`${TODOS_URL}/${id}`).then(({ data }) => data);

export const putTodo = (item: Item) =>
  axios.put(`${TODOS_URL}/${item.id}`, item).then(({ data }) => data);
