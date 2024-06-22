import React from 'react';

const JobDetail = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Responsibilities: {job.responsibilities}</p>
      {/* Additional job details can be added here */}
    </div>
  );
};

export default JobDetail;
