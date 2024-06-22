import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map(job => (
        <div key={job._id}>
          <Link to={`/job/${job._id}`}>
            <h2>{job.title}</h2>
          </Link>
          <p>{job.location}</p>
          <p>{job.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
