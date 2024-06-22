import React, { useEffect, useState } from 'react';
import applicationService from '../services/applicationService';

const RecruiterDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    applicationService.getApplicationsForRecruiter().then(response => {
      setApplications(response.data);
    });
  }, []);

  const handleReview = (applicationId) => {
    applicationService.reviewApplication(applicationId).then(() => {
      setApplications(applications.filter(app => app._id !== applicationId));
    });
  };

  return (
    <div>
      <h1>Recruiter Dashboard</h1>
      <ul>
        {applications.map(application => (
          <li key={application._id}>
            <h2>{application.candidateName}</h2>
            <p>{application.jobTitle}</p>
            <button onClick={() => handleReview(application._id)}>Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecruiterDashboard;
