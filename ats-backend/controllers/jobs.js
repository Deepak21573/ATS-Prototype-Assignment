const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description, recruiters } = req.body;

  try {
    const job = new Job({ title, description, recruiters });
    await job.save();
    res.status(201).json({ message: 'Job created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
