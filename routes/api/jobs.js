const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// api/jobs
router.route("/")
  .get(jobsController.find)

module.exports = router;