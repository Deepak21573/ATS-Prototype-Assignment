import axios from 'axios';

const API_URL = 'http://localhost:6000/api/applications';

const getApplicationsForRecruiter = () => {
  return axios.get(`${API_URL}/recruiter`);
};

const reviewApplication = (applicationId) => {
  return axios.put(`${API_URL}/review/${applicationId}`);
};

export default {
  getApplicationsForRecruiter,
  reviewApplication
};
