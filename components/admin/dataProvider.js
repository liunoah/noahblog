import axios from 'axios';
import { fetchUtils } from 'react-admin';

const API_BASE_URL = 'https://liunoah.com:4000/blogs/';
const httpClient = fetchUtils.fetchJson;

const getDataProvider = () => {
  const dataProvider = {
    // 获取列表数据
    getList: async (resource, params) => {
      const url = `${API_BASE_URL}${resource}`;
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        ...params.filter,
        _sort: field,
        _order: order,
        _start: (page - 1) * perPage,
        _limit: perPage,
      };
      const { headers, json } = await httpClient(url, { query });
      return {
        data: json,
        total: parseInt(headers.get('X-Total-Count'), 10),
      };
    },
    // 获取单个数据
    getOne: async (resource, params) => {
      const url = `${API_BASE_URL}${resource}/${params.id}`;
      const response = await axios.get(url);
      return {
        data: response.data,
     };
    },
    // 获取多个数据
    getMany: async (resource, params) => {
      const ids = params.ids.join(',');
      const url = `${API_BASE_URL}${resource}/?id=${ids}`;
      const response = await axios.get(url);
      return {
        data: response.data,
      };
    },
    // 获取所有数据
    getManyReference: async (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        ...params.filter,
        [params.target]: params.id,
        _sort: field,
        _order: order,
        _start: (page - 1) * perPage,
        _limit: perPage,
      };
      const url = `${API_BASE_URL}${resource}`;
      const { headers, json } = await httpClient(url, { query });
      return {
        data: json,
        total: parseInt(headers.get('X-Total-Count'), 10),
      };
    },
    // 创建数据
    create: async (resource, params) => {
      const url = `${API_BASE_URL}${resource}`;
      const response = await axios.post(url, params.data);
      return {
        data: { ...params.data, id: response.data.id },
      };
    },
    // 更新数据
    update: async (resource, params) => {
      const url = `${API_BASE_URL}${resource}/${params.id}`;
      const response = await axios.put(url, params.data);
      return {
        data: { ...params.data },
      };
    },
    // 删除数据
    delete: async (resource, params) => {
      const url = `${API_BASE_URL}${resource}/${params.id}`;
      await axios.delete(url);
      return {
        data: { ...params.previousData },
      };
    },
    // 删除多个数据
    deleteMany: async (resource, params) => {
      const ids = params.ids.join(',');
      const url = `${API_BASE_URL}${resource}/?id=${ids}`;
      await axios.delete(url);
      return {
        data: ids,
      };
    },
  };

  return dataProvider;
};

export default getDataProvider();