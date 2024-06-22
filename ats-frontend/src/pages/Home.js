import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';
import JobList from '../components/JobList';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobService.getAllJobs();
        setJobs(response); // Assuming the response is an array of jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
