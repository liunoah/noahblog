// api.js

const API_BASE_URL = 'https://liunoah.com:4000/blogs/';
// const API_BASE_URL = 'http://127.0.0.1:5000/blogs/';

const headers = {
  'Content-Type': 'application/json',
};

const get = async (url) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'GET',
    headers,
  });
  const data = await response.json();
  return data;
};

const post = async (url, body) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

const put = async (url, body) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

const remove = async (url) => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'DELETE',
    headers,
  });
  const data = await response.json();
  return data;
};

export default {
  get,
  post,
  put,
  delete: remove,
};