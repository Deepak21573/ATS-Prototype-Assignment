import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';
import ApplicationForm from '../components/ApplicationForm';

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    jobService.getJobById(id).then(response => {
      setJob(response.data);
    });
  }, [id]);

  return (
    <div>
      {job && (
        <>
          <h1>{job.title}</h1>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.responsibilities}</p>
          <ApplicationForm jobId={id} r1Check={job.r1Check} />
        </>
      )}
    </div>
  );
};

export default Job;
