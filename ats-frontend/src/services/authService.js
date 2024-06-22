import axios from 'axios';

const API_URL = 'http://localhost:6000/api/auth';

const register = (name, email, password, role) => {
  return axios.post(`${API_URL}/register`, { name, email, password, role });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const authService = {
  register,
  login,
};

export default authService;
