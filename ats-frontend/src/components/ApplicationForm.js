import React, { useState } from 'react';
import applicationService from '../services/applicationService';

const ApplicationForm = ({ jobId, r1Check }) => {
  const [candidateName, setCandidateName] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = { candidateName, resume, jobId, r1Check };
    applicationService.submitApplication(application).then(() => {
      alert('Application submitted successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for this Job</h2>
      <input
        type="text"
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="text"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Link to your Resume"
        required
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;
