import React, { useEffect, useState } from 'react';
import applicationService from '../services/applicationService';

const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    applicationService.getApplicationsForCandidate().then(response => {
      setApplications(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <ul>
        {applications.map(application => (
          <li key={application._id}>
            <h2>{application.jobTitle}</h2>
            <p>Status: {application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateDashboard;
