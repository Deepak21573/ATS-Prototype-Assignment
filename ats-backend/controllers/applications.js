const Application = require('../models/Application');
const Job = require('../models/Job');

exports.applyForJob = async (req, res) => {
  const { jobId, resume, r1Responses } = req.body;
  try {
    const application = new Application({
      jobId,
      candidateId: req.user.userId,
      resume,
      r1Responses,
      status: 'submitted'
    });
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApplicationsForRecruiter = async (req, res) => {
  try {
    const jobs = await Job.find({ recruiters: req.user.userId });
    const jobIds = jobs.map(job => job._id);
    const applications = await Application.find({
      jobId: { $in: jobIds },
      status: 'submitted'
    }).populate('candidateId');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  const { r2Responses, status } = req.body;
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    if (r2Responses) application.r2Responses = r2Responses;
    if (status) application.status = status;

    await application.save();
    res.json({ message: 'Application updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
