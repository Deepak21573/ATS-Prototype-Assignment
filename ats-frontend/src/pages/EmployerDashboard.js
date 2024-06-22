import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobService.getJobsForEmployer().then(response => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Employer Dashboard</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Status: {job.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerDashboard;
