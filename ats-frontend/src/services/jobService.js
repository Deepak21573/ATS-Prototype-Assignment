import axios from 'axios';

const API_URL = 'http://localhost:6000/api/jobs';

const getAllJobs = () => {
  return axios.get(API_URL);
};

const getJobById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createJob = (job) => {
  return axios.post(API_URL, job);
};

const getPendingJobs = () => {
  return axios.get(`${API_URL}/pending`);
};

const approveJob = (jobId) => {
  return axios.put(`${API_URL}/approve/${jobId}`);
};

export default {
  getAllJobs,
  getJobById,
  createJob,
  getPendingJobs,
  approveJob
};
