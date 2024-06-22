const express = require('express');
const Job = require('../models/Job');
const { verifyToken, verifyRole } = require('../middleware/auth');
const router = express.Router();

// Create job
router.post('/', verifyToken, verifyRole('employer'), async (req, res) => {
  const { title, location, salary, responsibilities, r1Check } = req.body;
  try {
    const job = new Job({ title, location, salary, responsibilities, r1Check, createdBy: req.user.userId });
    await job.save();
    res.status(201).json({ message: 'Job created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all jobs
router.get('/', verifyToken, async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'approved' });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get job by ID
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Approve job
router.put('/:id/approve', verifyToken, verifyRole('coordinator'), async (req, res) => {
  const { recruiters, r2Check } = req.body;
  try {
    const job = await Job.findById(req.params.id);
    job.status = 'approved';
    job.recruiters = recruiters;
    job.r2Check = r2Check;
    await job.save();
    res.json({ message: 'Job approved and posted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
