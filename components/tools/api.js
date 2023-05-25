import axios from 'axios';

const API_BASE_URL = 'https://liunoah.com:4000/blogs/';

// const API_BASE_URL = 'http://127.0.0.1:5000/blogs/';

const headers = {
  'Content-Type': 'application/json',
};

//判断response状态码是否为200
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }
);
const get = async (url) => {
  const response = await axios.get(`${API_BASE_URL}${url}`, {
    headers,
  });
  //判断状态码是否为200
  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
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

const setToken = (token) => {
  headers['Authorization'] = token;
};

const login = async (body) => {
  const response = await axios.post(`${API_BASE_URL}user/login`,body, {
    headers,
  });
  if (response.status === 200) {
    setToken(response.data.token)
    return true
  }else {return false}
};
// register 
const register = async (body) => {
  post('admin/register', body);
};

// get all blogs
const getAllBlogs = async () => {
  const response = await get('blogs');
  return response;
};
// get a blog by id
const getBlogById = async (id) => {
  const response = await get(`blogs/${id}`);
  return response;
};
// delete a blog by id
const deleteBlogById = async (id) => {
  const response = await remove(`blogs/${id}`);
  return response;
};
// create a blog
const createBlog = async (body) => {
  const response = await post('blogs', body);
  return response;
};
// update a blog
const updateBlog = async (id, body) => {
  const response = await put(`blogs/${id}`, body);
  return response;
};

// search blogs by title
const searchBlogsByTitle = async (title) => {
  const response = await get(`blogs/search/${title}`);
  return response;
};
// get all comments by blog id
const getAllCommentsByBlogId = async (id) => {
  const response = await get(`comments/${id}`);
  return response;
};
// delete a comment by id
const deleteCommentById = async (id) => {
  const response = await remove(`comments/${id}`);
  return response;
};
// create a comment
const createComment = async (body) => {
  const response = await post('comments', body);
  return response;
};
// update a comment
const updateComment = async (id, body) => {
  const response = await put(`comments/${id}`, body);
  return response;
};
// get sum of comments by blog id
const getSumOfCommentsByBlogId = async (id) => {
  const response = await get(`comments/sum/${id}`);
  return response;
};

export default {
  get,
  post,
  put,
  delete: remove,
  setToken,
  // 导出API
  login,
  register,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  createBlog,
  updateBlog,
  searchBlogsByTitle,
  getAllCommentsByBlogId,
  deleteCommentById,
  createComment,
  updateComment,
  getSumOfCommentsByBlogId,
};