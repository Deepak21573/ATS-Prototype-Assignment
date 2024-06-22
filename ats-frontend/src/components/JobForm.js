import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [jobData, setJobData] = useState({
    title: '',
    location: '',
    salary: '',
    responsibilities: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prevJobData => ({
      ...prevJobData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(jobData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <input
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <input
        type="text"
        name="salary"
        value={jobData.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <textarea
        name="responsibilities"
        value={jobData.responsibilities}
        onChange={handleChange}
        placeholder="Responsibilities"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
