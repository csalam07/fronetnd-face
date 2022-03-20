import axios from 'axios';

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url, post) => {
  const res = await axios.post(`http://localhost:5000/api/${url}`, post, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
};

export const putDataAPI = async (url, post) => {
  // console.log(url);
  const res = await axios.put(`http://localhost:5000/api/${url}`, post, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(res);
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  console.log(res);
  return res;
};

export const deleteDataAPI = async (url) => {
  const res = await axios.delete(`http://localhost:5000/api/${url}`, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(res);
  return res;
};
