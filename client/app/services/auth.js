import { url } from '../utils/url';
import axios from 'axios';

export const loginUser = async (body) => {
  const api = axios.create({
    baseURL: `${url}/api/users/login`,
    headers: { 'Content-Type': 'application/json' },
  });
  const { data } = await api.post('', body);
  return data;
};

export const signupUser = async (body) => {
  const api = axios.create({
    baseURL: `${url}/api/users/signup`,
    headers: { 'Content-Type': 'application/json' },
  });
  // console.log(body);
  try {
    const { data } = await api.post('', body);
    return data;
  } catch (error) {
    // console.log(error.response);
    throw new Error(`Error in API response; ${error.message}`);
  }
};
