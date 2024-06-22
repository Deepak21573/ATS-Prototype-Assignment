const express = require('express');
const {
  applyForJob,
  getApplicationsForRecruiter,
  updateApplicationStatus
} = require('../controllers/applications');
const { verifyToken, verifyRole } = require('../middleware/auth');
const router = express.Router();

router.post('/', verifyToken, verifyRole('candidate'), applyForJob);
router.get('/recruiter', verifyToken, verifyRole('recruiter'), getApplicationsForRecruiter);
router.put('/:id/review', verifyToken, verifyRole('recruiter'), updateApplicationStatus);

module.exports = router;
