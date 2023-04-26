import axios from 'axios';

const API_BASE_URL = 'https://liunoah.com:4000/blogs/';
// const API_BASE_URL = 'http://127.0.0.1:5000/blogs/';

const headers = {
  'Content-Type': 'application/json',
};

const get = async (url) => {
  const response = await axios.get(`${API_BASE_URL}${url}`, {
    headers,
  });
  return response.data;
};

const post = async (url, body) => {
  const response = await axios.post(`${API_BASE_URL}${url}`, body, {
    headers,
  });
  return response.data;
};

const put = async (url, body) => {
  const response = await axios.put(`${API_BASE_URL}${url}`, body, {
    headers,
  });
  return response.data;
};

const remove = async (url) => {
  const response = await axios.delete(`${API_BASE_URL}${url}`, {
    headers,
  });
  return response.data;
};

export default {
  get,
  post,
  put,
  delete: remove,
};