import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';

const CoordinatorDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobService.getPendingJobs().then(response => {
      setJobs(response.data);
    });
  }, []);

  const handleApprove = (jobId) => {
    jobService.approveJob(jobId).then(() => {
      setJobs(jobs.filter(job => job._id !== jobId));
    });
  };

  return (
    <div>
      <h1>Coordinator Dashboard</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <button onClick={() => handleApprove(job._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoordinatorDashboard;
